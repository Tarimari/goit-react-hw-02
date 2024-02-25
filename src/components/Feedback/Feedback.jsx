export default function Feedback({
  points: { good, neutral, bad },
  totalFeedback,
  persent,
}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {persent} %</p>
    </div>
  );
}
