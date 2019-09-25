import React, { createContext, useReducer, useContext } from 'react';
import { initialState, dataReducer } from '../reducers/dataReducer';

// This creates a context object to store and access child nutrition data records from the backend in state
export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, dispatchData] = useReducer(dataReducer, initialState);
  return (
    <DataContext.Provider value={{ data, dispatchData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(DataContext);
  return context;
}
