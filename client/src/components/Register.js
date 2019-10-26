import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  Form,
  Button,
  Input,
  Select,
  Error,
  theme,
} from '../styled-components/index';

import { useUserContext } from '../contexts/UserContext';

export default function Register(props) {
  const { user, dispatch } = useUserContext();

  const [countries, setCountries] = useState([]);

  const [registrationInfo, setRegistrationInfo] = useState({
    username: '',
    password: '',
    role: 'user',
    country_id: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    axiosWithAuth()
      .get('/countries')
      .then(res => {
        // console.log(res.data);
        setCountries(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleChange = e => {
    setRegistrationInfo({
      ...registrationInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = e => {
    setRegistrationInfo({ ...registrationInfo, country_id: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(registrationInfo);

    axiosWithAuth()
      .post('/auth/register', registrationInfo)
      .then(res => {
        // console.log(res);
        localStorage.setItem('token', res.data.token);
        dispatch({
          type: 'LOGIN_SUCCESS',
          role: res.data.user.role,
          username: res.data.user.username,
          country_id: res.data.user.country_id,
          isAdmin: false,
        });
        props.history.push(`/country/${res.data.user.country_id}`);
      })
      .catch(err => {
        console.log(err);
        setError('Error registering!');
      });
  };

  // Navigate to proper page given token and usertype
  if (localStorage.getItem('token')) {
    if (user.usertype === 'admin') {
      return <Redirect to='/admin' />;
    } else {
      return <Redirect to={`/country/${user.country_id}`} />;
    }
  }

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
        <Select onChange={handleSelect}>
          <option>Select a country...</option>
          {countries.map(country => (
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

        {error && <Error>{error}</Error>}

        <Button type='submit'>Register</Button>
      </Form>
    </ThemeProvider>
  );
}
