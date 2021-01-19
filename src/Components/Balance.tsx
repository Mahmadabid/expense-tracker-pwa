import React, { useContext } from 'react';
import { Transaction } from '../Context/GlobalState';

export const Balance = () => {

    const initialState = useContext(Transaction);
    const transactions = initialState.state;
    var total=0;
    transactions.map((transaction) => total+=transaction.amount)

    return (
        <div>
            <h4>Your Balance</h4>
            <h1 className={`${total > 0 ? 'plus' : ''} ${total < 0 ? 'minus' : ''}`}>${total}</h1>
        </div>
    )
}
