import React, { useReducer } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
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
    <div className='App'>
      <GlobalStyle />
      <UserContext.Provider value={{ user, dispatch }}>
        <DataContext.Provider value={{ data, dispatchData }}>
          <Container>
            {/* <HeaderBar /> */}
            <Logo src={require('./image/ICN_Secondary_Alt.png')} />
            <TempNav />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/admin' component={Admin} />
            {/* <Route path="/country" component={Country} /> */}
            {/* <Route path="/community" component={Community} /> */}
            {/* <Route path="/child" component={Child} /> */}
            <Route path='/country/:id' component={Country} />
            <Route path='/community/:id' component={Community} />
            <Route path='/child/:id' component={Child} />
          </Container>
          <Footer src={require('./image/ICN_blue_waves_double.png')} />
        </DataContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

const Container = styled.div`
  // flex: 1 0 auto;
`;

const HeaderBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #0d71ba;
`;

const Logo = styled.img`
  width: 90%;
  max-width: 700px;
  margin: 10px 0;
`;

const Footer = styled.img`
  width: 100%;
  // flex-shrink: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 210px;
`;
