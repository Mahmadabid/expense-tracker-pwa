import { createContext, useState } from "react";

export interface IProviderProps {
    children?: any;
}

type Transactions = {
    id: number;
    text: string;
    amount: number;
}

type TransObj = Transactions[]

const initialState = {
    state: [
        {id:-10, text:'example', amount:0}
    ],
    setState: (state: TransObj) => {}
}

export const Transaction = createContext(initialState);

export const AppProvider = (props: IProviderProps) => {
    const [state, setState] = useState(initialState.state);
    return <Transaction.Provider value={{state, setState}}>{props.children}</Transaction.Provider>;
};
  