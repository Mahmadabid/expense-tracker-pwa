import React, { useState, useContext } from 'react';
import { Transaction } from '../Context/GlobalState';

export const AddTransaction = () => {

  const initialState = useContext(Transaction);
  const [Incexp, setIncExp] = useState('income');
  const [text, settext] = useState('');
  const [amount, setamount] = useState('');
  const transactions = initialState.state;
  const settransaction = initialState.setState;

  function Addition(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    settext('');
    setamount('');
    settransaction([...transactions,{id:Math.floor(Math.random() * 100000000), text:text, amount:Incexp==='income'? +amount: -amount} ]);
  }

  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={Addition}>
        <label htmlFor="description">Text</label>
        <input type="text" id="description" placeholder="Enter description..." value={text} onChange={(e) => { settext(e.target.value) }} required />

        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" placeholder="Enter Amount..." value={amount} onChange={(e) => { setamount(e.target.value) }} required />
        <div className="Inc-Exp">
          <div>
            <input type="radio" id="income" name="balance" defaultChecked onClick={() => { setIncExp('income') }} />
            <label htmlFor="income" className="inc-col">Income</label>
          </div>
          <div>
            <input type="radio" id="expense" name="balance" onClick={() => { setIncExp('expense') }} />
            <label htmlFor="expense" className="exp-col">Expense</label>
          </div>
        </div>
        <input className="btn" type="submit" value="Addtransaction" />
      </form>
    </div>
  )
}
