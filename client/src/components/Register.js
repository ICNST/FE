import React, { useState } from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Form, Button, Input, theme } from '../styled-components/index';

import { testUsers, testAdminUsers } from '../testData2';

import { useUserContext } from '../contexts/UserContext';
import { useDataContext } from '../contexts/DataContext';

export default function Register(props) {
  const { user, dispatch } = useUserContext();
  const { dispatchData } = useDataContext();

  const [registrationInfo, setRegistrationInfo] = useState({
    username: '',
    password: '',
    country: '',
  });

  const handleChange = e => {
    setRegistrationInfo({
      ...registrationInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const users = [...testUsers, ...testAdminUsers];
    if (users.map(obj => obj.username).includes(registrationInfo.username)) {
      dispatch({ type: 'REGISTRATION_FAILURE' });
    } else {
      localStorage.setItem('token', 'register' + registrationInfo.username);
      localStorage.setItem('country', registrationInfo.country);
      localStorage.setItem('usertype', 'user');
      dispatch({
        type: 'REGISTRATION_SUCCESS',
        username: registrationInfo.username,
        country: registrationInfo.country,
      });
      dispatchData({ type: 'SET_COUNTRY', payload: registrationInfo.country });
      props.history.push(`/country/${registrationInfo.country}`);
    }

    // axiosWithAuth()
    // .post('https://jsonplaceholder.typicode.com/users', registrationInfo)
    // .then(res => {
    //   console.log(res);
    //   localStorage.setItem('token', 'register' + res.data.id);
    //   localStorage.setItem('country', res.data.country);
    //   localStorage.setItem('usertype', 'user');
    //   dispatch({ type: 'REGISTRATION_SUCCESS', payload: res.data });
    //   dispatchData({ type: 'SET_COUNTRY', payload: res.data.country });
    //   props.history.push(`/country/${registrationInfo.country}`);
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  };

  if (localStorage.getItem('token')) {
    if (user.usertype === 'admin') {
      return <Redirect to='/admin' />;
    } else {
      return <Redirect to={`/country/${localStorage.getItem('country')}`} />;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Form onSubmit={handleSubmit}>
        <h2>Register:</h2>
        <label htmlFor='username'>Username</label>
        <Input
          type='text'
          id='username'
          name='username'
          placeholder='Username'
          value={registrationInfo.username}
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <Input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          value={registrationInfo.password}
          onChange={handleChange}
        />

        <label htmlFor='country'>Country</label>
        <Input
          type='text'
          id='country'
          name='country'
          placeholder='Country'
          value={registrationInfo.country}
          onChange={handleChange}
        />

        {user.error && <p>{user.error}</p>}

        <Button type='submit'>Register</Button>
      </Form>
    </ThemeProvider>
  );
}
