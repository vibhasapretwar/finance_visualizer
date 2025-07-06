export default function TransactionList({ transactions }) {
  return (
    <ul className="mt-4 space-y-2">
      {transactions.map(t => (
        <li key={t._id} className="p-2 border-b">
          {new Date(t.date).toLocaleDateString()} – ₹{t.amount} – {t.description}
        </li>
      ))}
    </ul>
  );
}