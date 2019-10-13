import React, { useState, useEffect } from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Form, Button, Input, theme } from '../styled-components/index';

import { testData, testUsers, testAdminUsers } from '../testData2';

import { useUserContext } from '../contexts/UserContext';
import { useDataContext } from '../contexts/DataContext';

export default function Login(props) {
  const { user, dispatch } = useUserContext();
  const { data, dispatchData } = useDataContext();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    usertype: 'user',
  });

  // useEffect(() => {
  //   dispatchData({ type: 'IMPORT_DATA', payload: testData });
  //   dispatchData({ type: 'SET_CHILDREN', payload: testData });
  // }, []);

  // useEffect(() => {
  //   const countryList = data.childrenData.map(obj => obj.country);
  //   const uniqueCountries = new Set(countryList);
  //   const countries = [...uniqueCountries];
  //   dispatchData({ type: 'SET_COUNTRIES', payload: countries });
  // }, [data.childrenData]);

  const handleChange = e =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    if (
      testUsers.find(
        obj =>
          obj.username === credentials.username &&
          obj.password === credentials.password,
      )
    ) {
      const countryObj = testUsers.find(
        obj => obj.username === credentials.username,
      );
      localStorage.setItem('token', 'login' + credentials.username);
      localStorage.setItem('usertype', credentials.usertype);
      dispatch({
        type: 'LOGIN_SUCCESS',
        usertype: credentials.usertype,
        username: credentials.username,
      });
      localStorage.setItem('country', countryObj.country_name);
      props.history.push(`/country/${countryObj.country_name}`);
    } else if (
      testAdminUsers.find(
        obj =>
          obj.username === credentials.username &&
          obj.password === credentials.password,
      )
    ) {
      localStorage.setItem('token', 'admin' + credentials.username);
      localStorage.setItem('usertype', 'admin');
      dispatch({
        type: 'LOGIN_SUCCESS',
        usertype: 'admin',
        username: credentials.username,
      });
      dispatch({ type: 'LOGIN_ADMIN' });
      props.history.push('/admin');
    } else {
      dispatch({ type: 'LOGIN_FAILURE' });
    }

    // dispatch({ type: 'LOGIN_START' });
    // axiosWithAuth()
    //   .post('https://jsonplaceholder.typicode.com/users', credentials)
    //   .then(res => {
    //     // console.log(res);
    //     localStorage.setItem('token', 'login' + res.data.id);
    //     localStorage.setItem('usertype', res.data.usertype);
    //     dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    //     if (credentials.usertype === 'admin') {
    //       dispatch({ type: 'LOGIN_ADMIN' });
    //       props.history.push('/admin');
    //     } else {
    //       localStorage.setItem('country', user.country);
    //       props.history.push(`/country/${user.country}`);
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  // Navigate to proper page given token and usertype
  if (localStorage.getItem('token')) {
    if (localStorage.getItem('usertype') === 'admin') {
      return <Redirect to='/admin' />;
    } else {
      return <Redirect to={`/country/${localStorage.getItem('country')}`} />;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Form onSubmit={handleSubmit}>
        <h2>Login:</h2>
        {/* <span>
          <div>
            <label htmlFor='user'>User</label>
            <input
              type='radio'
              id='user'
              name='usertype'
              value='user'
              checked={credentials.usertype === 'user'}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='admin'>Admin</label>
            <input
              type='radio'
              id='admin'
              name='usertype'
              value='admin'
              checked={credentials.usertype === 'admin'}
              onChange={handleChange}
            />
          </div>
        </span> */}

        <label htmlFor='username'>Username</label>
        <Input
          type='text'
          id='username'
          name='username'
          placeholder='Username'
          value={credentials.username}
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <Input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={handleChange}
        />
        {user.error && <p>{user.error}</p>}
        <Button type='submit'>Login</Button>
      </Form>
    </ThemeProvider>
  );
}
