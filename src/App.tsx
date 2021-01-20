import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from "./Components/Header";
import { Balance } from './Components/Balance';
import { IncomeExpense } from "./Components/Income_Expense";
import { TransactionHistory } from "./Components/TransactionHistory";
import { AddTransaction } from "./Components/AddTransaction";
import { AppProvider } from './Context/GlobalState'
import { getNotifications } from "./Services/Notification";

function App() {

  const [islit, setlit] = useState(true);
  
  useEffect(() => {
    getNotifications();
  }, [])

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
