import { useEffect, useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import SummaryCards from './components/SummaryCards';
import CategoryPieChart from './components/CategoryPieChart';


function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  const handleAdd = (tx) => {
    setTransactions(prev => [tx, ...prev]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Finance Tracker</h1>
      <TransactionForm onAdd={handleAdd} />
      <TransactionList transactions={transactions} />
      <SummaryCards transactions={transactions} />
      <CategoryPieChart transactions={transactions} />
    </div>
  );
}

export default App;