import React, { createContext, useReducer, useContext } from 'react';
import { initialLoginState, loginReducer } from '../reducers/loginReducer';

// This creates a context object to store and access login and user information in state
const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, dispatch] = useReducer(loginReducer, initialLoginState);
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

// This intentionally avoids exporting UserContext and provides just one way to provide the context value and one way to consume it
export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within UserProvider');
  }
  return context;
}
