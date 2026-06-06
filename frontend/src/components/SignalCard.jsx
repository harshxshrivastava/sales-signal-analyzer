function SignalCard({ signal }) {

  const getTitle = () => {
    switch (signal.type) {
      case "buying_interest":
        return "🟢 Buying Interest";

      case "objection":
        return "🟡 Objection";

      case "confusion":
        return "🔵 Confusion";

      default:
        return signal.type;
    }
  };

  return (
    <div className={`card ${signal.type}`}>
      <h2>{getTitle()}</h2>

      <div className="quote-section">
        <strong>Quote</strong>

        <p>{signal.quote}</p>
      </div>

      <div className="tip-section">
        <strong>Coaching Tip</strong>

        <p>{signal.tip}</p>
      </div>
    </div>
  );
}

export default SignalCard;