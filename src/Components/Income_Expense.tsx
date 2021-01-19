import React, {useContext} from 'react';
import { Transaction} from '../Context/GlobalState';

export const IncomeExpense = () => {

  const initialState = useContext(Transaction);
  const transactions = initialState.state;
  var income = 0 ;
  var expense = 0;
  transactions.map((transaction) => transaction.amount > 0? income+=transaction.amount: expense-=transaction.amount)

  return (
    <div className="Inc-Exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  )
}
