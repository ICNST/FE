import React, { useState, useEffect } from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import { ThemeProvider } from 'styled-components';
import { theme, Form, Button, Input } from '../styled-components';

import { testUsers, testAdminUsers } from '../testData2';

import { useUserContext } from '../contexts/UserContext';

export default function RegisterAdmin() {
  const { user, dispatch } = useUserContext();
  const [registrationInfo, setRegistrationInfo] = useState({
    username: '',
    password: '',
    usertype: 'user',
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
    const users = [...testUsers, ...testAdminUsers];
    if (users.map(obj => obj.username).includes(registrationInfo.username)) {
      dispatch({ type: 'REGISTRATION_FAILURE' });
    }
    console.log(registrationInfo);
    // axiosWithAuth()
    //   .post()
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Form onSubmit={handleSubmit}>
          <h3>Register New User:</h3>
          <span>
            <div>
              <label htmlFor='user'>User</label>
              <input
                type='radio'
                id='user'
                name='usertype'
                value='user'
                checked={registrationInfo.usertype === 'user'}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='admin'>Admin</label>
              <input
                type='radio'
                id='admin'
                name='usertype'
                value='admin'
                checked={registrationInfo.usertype === 'admin'}
                onChange={handleChange}
              />
            </div>
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
                id='country'
                name='country'
                placeholder='Country'
                value={registrationInfo.country}
                onChange={handleChange}
              />
            </>
          )}

          {user.error && <p>{user.error}</p>}

          <Button type='submit'>Register</Button>
        </Form>
      </div>
    </ThemeProvider>
  );
}
