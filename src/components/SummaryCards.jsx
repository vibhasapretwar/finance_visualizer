export default function SummaryCards({ transactions }) {
  const total = transactions.reduce((sum, t) => sum + t.amount, 0);
  const latest = transactions.slice(0, 3);
  const uniqueCategories = [...new Set(transactions.map(t => t.category))];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-100 p-4 rounded shadow-sm">
        <h3 className="font-semibold text-sm">Total Expenses</h3>
        <p className="text-xl font-bold">₹{total.toFixed(2)}</p>
      </div>

      <div className="bg-green-100 p-4 rounded shadow-sm">
        <h3 className="font-semibold text-sm">Recent Transactions</h3>
        <ul className="text-sm mt-2 space-y-1">
          {latest.length > 0 ? (
            latest.map(t => (
              <li key={t._id}>
                {t.description} – ₹{t.amount}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No transactions yet.</li>
          )}
        </ul>
      </div>

      <div className="bg-yellow-100 p-4 rounded shadow-sm">
        <h3 className="font-semibold text-sm">Categories Used</h3>
        <ul className="text-sm mt-2 space-y-1">
          {uniqueCategories.length > 0 ? (
            uniqueCategories.map(cat => <li key={cat}>{cat}</li>)
          ) : (
            <li className="text-gray-500">No categories yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
