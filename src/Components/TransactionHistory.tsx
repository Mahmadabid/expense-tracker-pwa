import React from 'react';
import { Transactions } from "./Transaction";

export const TransactionHistory = () => {

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <Transactions />
            </ul>
        </div>
    )
}
