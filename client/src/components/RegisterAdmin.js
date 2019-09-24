import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, Form, Button,Input } from '../styled-components';

export default function RegisterAdmin() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h3>Register New User</h3>
        <Form>
          <span>
            User
            <input type='radio' id='User' name='usertype' value='user' />
            Admin
            <Input type='radio' id='Admin' name='usertype' value='admin' />
          </span>

          <label>Username</label>
          <Input type='text' id='username' name='username' />

          <label>Password</label>
          <Input type='text' id='password' name='password' />

          <Button type='submit'>Register</Button>
        </Form>
      </div>
    </ThemeProvider>
  );
}
