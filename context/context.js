import React, { useReducer, createContext } from 'react';
import dayjs from 'dayjs';
import contextReducer from './contextReducer';
import { useEffect } from 'react';

const initialState = {
    startDate: dayjs().subtract(2, 'day').format('YYYY-MM-DD'),
    endDate: dayjs().format('YYYY-MM-DD'),
};

export const StockContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
    const [dates, dispatch] = useReducer(contextReducer, initialState);

    const setStartDate = (date) => {
        dispatch({ type: 'SET_START_DATE', payload: date });
    }
    const setEndDate = (date) => {
        dispatch({ type: 'SET_END_DATE', payload: date });
    }

    // useEffect(() => {
    //     console.log(dates);
    // }, [dates])

    return (
        <StockContext.Provider value={{
            dates,
            setStartDate,
            setEndDate
        }}
        >
            {children}
        </StockContext.Provider>
    );
};
