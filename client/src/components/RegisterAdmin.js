import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { ThemeProvider } from 'styled-components';
import { theme, Form, Button, Input } from '../styled-components';

import { useUserContext } from '../contexts/UserContext';

export default function RegisterAdmin() {
  const { user, dispatch } = useUserContext();
  const [registrationInfo, setRegistrationInfo] = useState({
    username: '',
    password: '',
    usertype: '',
    country: '',
  });

  useEffect(() => {
    if (registrationInfo.usertype === 'admin') {
      setRegistrationInfo({ ...registrationInfo, country: '' });
    }
  }, [registrationInfo.usertype]);

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
      <div>
        <Form onSubmit={handleSubmit}>
          <h3>Register New User:</h3>
          <span>
            <label htmlFor='user'>User</label>
            <input
              type='radio'
              id='user'
              name='usertype'
              value='user'
              checked={registrationInfo.usertype === 'user'}
              onChange={handleChange}
            />
            <label htmlFor='admin'>Admin</label>
            <input
              type='radio'
              id='admin'
              name='usertype'
              value='admin'
              checked={registrationInfo.usertype === 'admin'}
              onChange={handleChange}
            />
          </span>

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

          {registrationInfo.usertype === 'user' && (
            <>
              <label htmlFor='country'>Country</label>
              <Input
                type='text'
                id='password'
                name='country'
                placeholder='Country'
                value={registrationInfo.country}
                onChange={handleChange}
              />
            </>
          )}

          <Button type='submit'>Register</Button>
        </Form>
      </div>
    </ThemeProvider>
  );
}
