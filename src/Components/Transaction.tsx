import React, { useContext, useState, useEffect } from 'react';
import { Transaction } from '../Context/GlobalState';

export const Transactions = () => {

    const initialState = useContext(Transaction);
    const transactions = initialState.state;
    const setTransactions = initialState.setState;
    const [val, setval] = useState(0);
    const [loop, setloop] = useState(true);

    useEffect(() => {
        if (loop) {
            for (var i = 0; i < transactions.length; i++) {
                if (transactions[i].id === -10) {
                    setTransactions(transactions.filter(transaction => transaction.id !== -10));
                }
            }
            setloop(false);
        }
    }, [loop, transactions, setTransactions])

    const deleteTransaction = () => {
        setTransactions(transactions.filter(transaction => transaction.id !== val))
    }

    return (
        <div>
            {transactions.map((transaction) =>
                <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
                    {transaction.text}<span>{transaction.amount > 0 ? '+' : '-'}${Math.abs(transaction.amount)}</span>
                    <button className="delete-btn" onClickCapture={() => setval(transaction.id)} onClick={deleteTransaction}>X</button>
                </li>
            )}
        </div>
    )
}
