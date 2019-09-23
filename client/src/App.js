import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import TempNav from './components/TempNav';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Country from './components/Country';
import Community from './components/Community';
import Child from './components/Child';

function App() {
  return (
    <div className='App'>
      <TempNav />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/admin' component={Admin} />
      <Route path='/country' component={Country} />
      <Route path='/community' component={Community} />
      <Route path='/child' component={Child} />
    </div>
  );
}

export default App;
