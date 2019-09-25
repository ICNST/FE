import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { ThemeProvider } from 'styled-components';
import { Form, Button, Input, theme } from '../styled-components/index';

import { useUserContext } from '../contexts/UserContext';
import { useDataContext } from '../contexts/DataContext';

export default function Register() {
  const { user, dispatch } = useUserContext();
  const { data, dispatchData } = useDataContext();

  const [registrationInfo, setRegistrationInfo] = useState({
    username: '',
    password: '',
    country: '',
  });

  const handleChange = e =>
    setRegistrationInfo({
      ...registrationInfo,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(registrationInfo);
  };

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

        <Button type='submit'>Register</Button>
      </Form>
    </ThemeProvider>
  );
}
