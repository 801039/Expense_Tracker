import React from "react";
import { useState, useContext, createContext } from 'react';
import axios from 'axios';

const Base_URL = 'https://localhost:5000/';

const GlobalContext = React.createContext(); 

export const GlobalProvider = ({children}) => { 

    const [incomes, setIncomes] = React.useState([]);
    const [expenses, setExpenses] = React.useState([]);
    const [error,  setError] = React.useState(null);

    const addIncome = async (income) => {
        const response = await axios.post(`${Base_URL} add-income`, income)
        .catch ((err) => {
            setError(err.response.data.message);
        })
    
    }

    return(
        <GlobalContext.Provider value = {'hello'}>
            {children}    
        </ GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
  }