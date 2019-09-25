import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Form, Button, Input, theme } from '../styled-components/index';

export default function Login() {
  return (
    <ThemeProvider theme={theme}>
      <Form>
        <h3>Login:</h3>
        <span>
          User
          <Input type='radio' id='User' name='useType' value='user' />
          Admin
          <input type='radio' id='Admin' name='useType' value='admin' />
        </span>

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

        <Button type='submit'>Login</Button>
      </Form>
    </ThemeProvider>
  );
}
