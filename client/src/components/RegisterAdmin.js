import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { ThemeProvider } from 'styled-components';
import {
  theme,
  Form,
  Button,
  Input,
  Select,
  Error,
} from '../styled-components';

import { useUserContext } from '../contexts/UserContext';
import { useDataContext } from '../contexts/DataContext';

export default function RegisterAdmin() {
  const { dispatch } = useUserContext();
  const { data } = useDataContext();

  const [registrationInfo, setRegistrationInfo] = useState({
    username: '',
    password: '',
    role: 'user',
    country_id: null,
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (registrationInfo.role === 'admin') {
      setRegistrationInfo({ ...registrationInfo, country_id: null });
    }
  }, [registrationInfo.role]);

  const handleChange = e =>
    setRegistrationInfo({
      ...registrationInfo,
      [e.target.name]: e.target.value,
    });

  const handleSelect = e => {
    setRegistrationInfo({ ...registrationInfo, country_id: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(registrationInfo);

    axiosWithAuth()
      .post('/auth/register', registrationInfo)
      .then(res => {
        // console.log(res);
        setMessage('User registered!');
      })
      .catch(err => {
        console.log(err);
        setError('Error registering!');
      });
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
                name='role'
                value='user'
                checked={registrationInfo.role === 'user'}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='admin'>Admin</label>
              <input
                type='radio'
                id='admin'
                name='role'
                value='admin'
                checked={registrationInfo.role === 'admin'}
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

          {registrationInfo.role === 'user' && (
            <>
              <label htmlFor='country'>Country</label>
              <Select onChange={handleSelect}>
                <option>Select a country...</option>
                {data.countries.map(country => (
                  <option key={country.id} name='country_id' value={country.id}>
                    {country.country}
                  </option>
                ))}
              </Select>
              {/* <Input
                type='text'
                id='country'
                name='country'
                placeholder='Country'
                value={registrationInfo.country}
                onChange={handleChange}
              /> */}
            </>
          )}

          {message && <p>{message}</p>}
          {error && <Error>{error}</Error>}

          <Button type='submit'>Register</Button>
        </Form>
      </div>
    </ThemeProvider>
  );
}
