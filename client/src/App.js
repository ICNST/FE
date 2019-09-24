import React, { useReducer } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Styles
import GlobalStyle from './styled-components/GlobalStyle';

// Contexts and Reducers to manage state
import { UserContext } from './contexts/UserContext';
import { DataContext } from './contexts/DataContext';
import { initialLoginState, loginReducer } from './reducers/loginReducer';
import { initialState, dataReducer } from './reducers/dataReducer';

// Components
import TempNav from './components/TempNav';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Country from './components/Country';
import Community from './components/Community';
import Child from './components/Child';


function App() {
  // This uses the useReducer hook to allow access to state and provide functions to dispatch actions to update state. Login state and child nutrition records are managed separately
  const [user, dispatch] = useReducer(loginReducer, initialLoginState);
  const [data, dispatchData] = useReducer(dataReducer, initialState);

  // Wrap components in Context Providers so nested components can access state
  return (
    <div className="App">
      <GlobalStyle />
      <UserContext.Provider value={{ user, dispatch }}>
        <DataContext.Provider value={{ data, dispatchData }}>
          <TempNav />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={Admin} />
          {/* <Route path="/country" component={Country} /> */}
          {/* <Route path="/community" component={Community} /> */}
          {/* <Route path="/child" component={Child} /> */}
          <Route path='/country/:id' component={Country}/>
          <Route path='/community/:id' component={Community}/>
          <Route path='/child/:id' component={Child}/>
        </DataContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
