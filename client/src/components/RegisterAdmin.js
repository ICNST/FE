import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, Form, Button, Input } from '../styled-components';

export default function RegisterAdmin() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Form>
          <h3>Register New User</h3>

          <span>
            User
            <input type='radio' id='User' name='usertype' value='user' />
            Admin
            <Input type='radio' id='Admin' name='usertype' value='admin' />
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

          <Button type='submit'>Register</Button>
        </Form>
      </div>
    </ThemeProvider>
  );
}
