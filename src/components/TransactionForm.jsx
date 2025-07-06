import { useState } from 'react';
export default function TransactionForm({ onAdd }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: parseFloat(amount), description, date, category: '' }),
    });
    const data = await res.json();
    onAdd(data);
    setAmount('');
    setDescription('');
    setDate('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow-md">
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" className="w-full border px-2 py-1" required />
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="w-full border px-2 py-1" required />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full border px-2 py-1" required />
      <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" className="w-full border px-2 py-1" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}
