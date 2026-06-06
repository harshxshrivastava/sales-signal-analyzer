import { useState } from "react";
import "./App.css";
import SignalCard from "./components/SignalCard";
import { analyzeTranscript } from "./services/api";

function App() {
  const [transcript, setTranscript] = useState("");
  const [signals, setSignals] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!transcript.trim()) {
      alert("Please enter a transcript");
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeTranscript(
        transcript
      );

      console.log(result);

      setSignals(result.signals || []);

    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
        error?.message ||
        "Failed to analyze transcript"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>AI Sales Signal Analyzer</h1>

      <textarea
        rows="12"
        placeholder="Paste meeting transcript here..."
        value={transcript}
        onChange={(e) =>
          setTranscript(e.target.value)
        }
      />

      <button onClick={handleAnalyze}>
        Analyze Transcript
      </button>

      {loading && (
        <p className="loading">
          Analyzing transcript...
        </p>
      )}

      <div className="results">
        {signals.map((signal, index) => (
          <SignalCard
            key={index}
            signal={signal}
          />
        ))}
      </div>
    </div>
  );
}

export default App;