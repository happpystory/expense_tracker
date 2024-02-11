import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//initial state
const initialState = { 
    transactions: []
}

//Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({ children }) => { 
    const [state, dispach] = useReducer(AppReducer, initialState)

    //Actions
    function deleteTransaction(id) { 
        dispach({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) { 
        dispach({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>)
}