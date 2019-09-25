import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {Form,Button,Input,theme}  from '../styled-components/index'

export default function Register() {
  return (
    <ThemeProvider theme={theme}>
      
        <Form>
          <h2>Register:</h2>
          <label>Username</label>
          <Input
            type='text'
            id='username'
            name='username'
            placeholder='UsreName'
          />

          <label>Password</label>
          <Input
            type='text'
            id='password'
            name='password'
            placeholder='PassWord'
          />

          <label>Country</label>
          <Input
            type='text'
            id='conteryname'
            name='countryname'
            placeholder='Country'
          />

          <Button type='submit'>Register</Button>
        </Form>
     
    </ThemeProvider>
  );
}
