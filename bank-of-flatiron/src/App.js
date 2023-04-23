import React, { useState, useEffect } from 'react';
import SearchBar from './Components/searchBar';
import TransactionForm from './Components/transactionForm';
import TransactionList from './Components/transactionList';
import './App.css';

      const App = () => {
      const [transactions, setTransactions] = useState([]);

      useEffect(() => {
      // Fetch transactions from the backend server
      const fetchTransactions = async () => {
            try {
            const response = await fetch('http://localhost:3000/transactions');
            const data = await response.json();
            setTransactions(data);
            } catch (error) {
            console.error('Error fetching transactions:', error);
            }
      };

      fetchTransactions();
      }, []);

      // Event handler for adding a new transaction
      const handleAddTransaction = (newTransaction) => {
      // Generate a unique ID for the new transaction
      newTransaction.id = Math.floor(Math.random() * 1000000);
      // Update the state with the new transaction
      setTransactions([...transactions, newTransaction]);
      };

      // Event handler for searching transactions
      const handleSearch = (searchTerm) => {
      // Filter transactions based on search term
      const filteredTransactions = transactions.filter(
            (transaction) =>
            transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // Update the state with filtered transactions
      setTransactions(filteredTransactions);
      };

      return (
      <div className='App'>
            <h1>Bank Transactions</h1>
            <SearchBar onSearch={handleSearch} />
            <TransactionList transactions={transactions} />
            <TransactionForm onAddTransaction={handleAddTransaction} />
      </div>
      );
      };

      export default App;



// class App extends Component {
//   render() {
//     return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
//     );
//   }
// }


