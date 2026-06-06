import { useState } from "react";
import "./App.css";
import SignalCard from "./components/SignalCard";
import { analyzeTranscript } from "./services/api";

function App() {
  const [transcript, setTranscript] = useState("");
  const [signals, setSignals] = useState([]);
  const [loading, setLoading] = useState(false);

  const buyingInterestCount = signals.filter(
    (s) => s.type === "buying_interest"
  ).length;

  const objectionCount = signals.filter(
    (s) => s.type === "objection"
  ).length;

  const confusionCount = signals.filter(
    (s) => s.type === "confusion"
  ).length;

  const handleAnalyze = async () => {
    if (!transcript.trim()) {
      alert("Please enter a transcript");
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeTranscript(transcript);

      setSignals(result.signals || []);
    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Failed to analyze transcript"
      );
    } finally {
      setLoading(false);
    }
  };

  const loadSampleTranscript = () => {
    setTranscript(`
Rep: Thanks for taking the time today.

Prospect: Sure, I'm interested in learning more.

Rep: Pricing starts at $499 per user per month.

Prospect: That seems expensive compared to what we're paying now.

Rep: Most customers recover the cost through increased sales.

Prospect: I'm not sure how your AI scoring works.

Rep: It analyzes engagement and buying signals.

Prospect: Okay, that makes sense.

Rep: Would you like a trial?

Prospect: Yes, send me the details.
    `);
  };

  return (
    <div className="container">

      <div className="hero">
        <h1>🎯 AI Sales Signal Analyzer</h1>

        <p>
          Detect buying interest, objections,
          confusion and receive coaching tips.
        </p>
      </div>

      <textarea
        value={transcript}
        onChange={(e) =>
          setTranscript(e.target.value)
        }
        placeholder="Paste your meeting transcript here..."
      />

      <div className="button-group">
        <button onClick={handleAnalyze}>
          Analyze Transcript
        </button>

        <button
          className="secondary-btn"
          onClick={loadSampleTranscript}
        >
          Load Sample
        </button>

        <button
          className="secondary-btn"
          onClick={() => {
            setTranscript("");
            setSignals([]);
          }}
        >
          Clear
        </button>
      </div>

      <div className="char-count">
        Characters: {transcript.length}
      </div>

      {loading && (
        <div className="loading">
          Analyzing transcript...
        </div>
      )}

      {signals.length > 0 && (
        <>
          <div className="summary">

            <div className="summary-card">
              <h3>🟢 Buying Interest</h3>
              <p>{buyingInterestCount}</p>
            </div>

            <div className="summary-card">
              <h3>🟡 Objections</h3>
              <p>{objectionCount}</p>
            </div>

            <div className="summary-card">
              <h3>🔵 Confusion</h3>
              <p>{confusionCount}</p>
            </div>

          </div>

          <div className="results">
            {signals.map((signal, index) => (
              <SignalCard
                key={index}
                signal={signal}
              />
            ))}
          </div>
        </>
      )}

    </div>
  );
}

export default App;