import React, {useState} from 'react';

const TransactionForm = ({ onAddTransaction }) => {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    // Event handler for form submission
        const handleSubmit = (event) => {
        event.preventDefault();
        const newTransaction = { date, description, amount };
            onAddTransaction(newTransaction);
            setDate('');
            setDescription('');
            setAmount('');
        };
    return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Date (YYYY-MM-DD)"
            value={date}
            onChange={(event) => setDate(event.target.value)}
        />
        <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
        />
        <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
        />
        <button type="submit">Add Transaction</button>
    </form>
    );
};
export default TransactionForm;