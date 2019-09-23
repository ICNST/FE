import React from 'react';

import { Form, Button } from '../styled-components';

export default function RegisterAdmin() {
  return (
    <div>
      <h3>Register New User</h3>
      <Form>
        <span>
          User
          <input type='radio' id='User' name='usertype' value='user' />
          Admin
          <input type='radio' id='Admin' name='usertype' value='admin' />
        </span>

        <label>Username</label>
        <input type='text' id='username' name='username' />

        <label>Password</label>
        <input type='text' id='password' name='password' />

        <Button type='submit'>Register</Button>
      </Form>
    </div>
  );
}
