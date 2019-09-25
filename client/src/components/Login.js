import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Form, Button, Input, theme } from '../styled-components/index';

import { useUserContext } from '../contexts/UserContext';

export default function Login() {
  const { user, dispatch } = useUserContext();
  const [credentials, setCredentials] = useState({
    username: user.username,
    password: user.password,
    usertype: user.usertype,
  });

  const handleChange = e =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // axiosWithAuth()
    //   .post('', credentials)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));
    console.log(credentials);
  };

  // Navigate to proper page given token and usertype
  // if (localStorage.getItem('token')) return <Redirect to='/' />;

  return (
    <ThemeProvider theme={theme}>
      <Form onSubmit={handleSubmit}>
        <h3>Login:</h3>
        <span>
          <label htmlFor='user'>User</label>
          <input
            type='radio'
            id='user'
            name='usertype'
            value='user'
            checked={credentials.usertype === 'user'}
            onChange={handleChange}
          />
          <label htmlFor='admin'>Admin</label>
          <input
            type='radio'
            id='admin'
            name='usertype'
            value='admin'
            checked={credentials.usertype === 'admin'}
            onChange={handleChange}
          />
        </span>

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
          type='text'
          id='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={handleChange}
        />

        <Button type='submit'>Login</Button>
      </Form>
    </ThemeProvider>
  );
}
