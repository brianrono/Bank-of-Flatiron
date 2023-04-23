import React from 'react';

const TransactionList = ({ transactions }) => {
    return (
    <table>
        <thead>
        <tr>
            <th>date</th>
            <th>description</th>
            <th>amount</th>
        </tr>
        </thead>
        <tbody>
        {transactions.map((transaction) => (
            <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            </tr>
        ))}
        </tbody>
    </table>
    );
};
export default TransactionList;