import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Form, Button, Input, Error, theme } from '../styled-components/index';

import { useUserContext } from '../contexts/UserContext';

export default function Login(props) {
  const { user, dispatch } = useUserContext();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = e =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('/auth/login', credentials)
      .then(res => {
        // console.log(res);
        localStorage.setItem('token', res.data.token);
        if (res.data.role === 'admin') {
          dispatch({
            type: 'LOGIN_SUCCESS',
            role: res.data.role,
            username: res.data.username,
            isAdmin: true,
          });
          props.history.push('/admin');
        } else if (res.data.role === 'user') {
          dispatch({
            type: 'LOGIN_SUCCESS',
            role: res.data.role,
            username: res.data.username,
            country_id: res.data.country_id,
            isAdmin: false,
          });
          props.history.push(`/country/${res.data.country_id}`);
        }
      })
      .catch(err => {
        console.log(err);
        setError('Error logging in!');
      });
  };

  // Navigate to proper page given token and usertype
  if (localStorage.getItem('token')) {
    if (user.usertype === 'admin') {
      return <Redirect to='/admin' />;
    } else {
      return <Redirect to={`/country/${user.country_id}`} />;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Form onSubmit={handleSubmit}>
        <h2>Login:</h2>
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

        {error && <Error>{error}</Error>}

        <Button type='submit'>Login</Button>
      </Form>
    </ThemeProvider>
  );
}
