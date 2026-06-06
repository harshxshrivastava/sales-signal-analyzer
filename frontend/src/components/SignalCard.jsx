function SignalCard({ signal }) {
  return (
    <div className="card">
      <h3>{signal.type}</h3>

      <p>
        <strong>Quote:</strong> {signal.quote}
      </p>

      <p>
        <strong>Tip:</strong> {signal.tip}
      </p>
    </div>
  );
}

export default SignalCard;