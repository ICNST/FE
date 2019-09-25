import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Form, Button, Input, theme } from '../styled-components/index';

export default function Register() {
  const [registrationInfo, setRegistrationInfo] = useState({
    username: '',
    password: '',
    countryname: '',
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

        <label htmlFor='countryname'>Country</label>
        <Input
          type='text'
          id='countryname'
          name='countryname'
          placeholder='Country'
          value={registrationInfo.countryname}
          onChange={handleChange}
        />

        <Button type='submit'>Register</Button>
      </Form>
    </ThemeProvider>
  );
}
