import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Form, Button, Input, theme } from '../styled-components/index';

export default function Register() {
  return (
    <ThemeProvider theme={theme}>
      <Form>
        <h2>Register:</h2>
        <label htmlFor='username'>Username</label>
        <Input
          type='text'
          id='username'
          name='username'
          placeholder='Username'
        />

        <label htmlFor='password'>Password</label>
        <Input
          type='text'
          id='password'
          name='password'
          placeholder='Password'
        />

        <label htmlFor='countryname'>Country</label>
        <Input
          type='text'
          id='countryname'
          name='countryname'
          placeholder='Country'
        />

        <Button type='submit'>Register</Button>
      </Form>
    </ThemeProvider>
  );
}
