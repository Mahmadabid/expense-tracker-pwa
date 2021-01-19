import React, { useState } from 'react';
import './App.css';
import { Header } from "./Components/Header";
import { Balance } from './Components/Balance';
import { IncomeExpense } from "./Components/Income_Expense";
import { TransactionHistory } from "./Components/TransactionHistory";
import { AddTransaction } from "./Components/AddTransaction";
import { AppProvider } from './Context/GlobalState'

function App() {

  const [islit, setlit] = useState(true);
  

  return (
    <AppProvider>
      <div className={`${islit? '': 'dark'} body`}>
        <Header islit={islit} setlit={setlit} />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
