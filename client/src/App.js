import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

// Styles
import GlobalStyle from './styled-components/GlobalStyle';

// Contexts to manage state
import UserProvider from './contexts/UserContext';
import DataProvider from './contexts/DataContext';

// Components
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Country from './components/Country';
import Community from './components/Community';
import Child from './components/Child';
import PrivateRoute from './components/PrivateRoute';

function App() {
  // Wrap components in Context Providers so nested components can access state
  return (
    <div className='App'>
      <GlobalStyle />
      <UserProvider>
        <DataProvider>
          <Logo src={require('./image/ICN_Secondary_Alt.png')} />
          <LogoSmall src={require('./image/ICN_Primary.png')} />
          <Nav />
          <Route exact path='/' render={() => <Redirect to='/login' />} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <PrivateRoute path='/admin' component={Admin} />
          <PrivateRoute path='/country/:id' component={Country} />
          <PrivateRoute path='/community/:id' component={Community} />
          <PrivateRoute path='/child/:id' component={Child} />
          <Footer src={require('./image/ICN_blue_waves_double.png')} />
        </DataProvider>
      </UserProvider>
    </div>
  );
}

export default App;

const HeaderBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #0d71ba;
`;

const Logo = styled.img`
  width: 90%;
  max-width: 700px;
  margin: 40px 0;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const LogoSmall = styled.img`
  margin-top: 20px;
  width: 90%;
  max-width: 500px;

  @media screen and (min-width: 501px) {
    display: none;
  }
`;

const Footer = styled.img`
  width: 100%;
  // flex-shrink: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 210px;
`;
