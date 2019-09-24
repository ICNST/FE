import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  primary: '#83c441',
  secondary: '#0d71ba',
};

const Component = styled.div`
  // background: #0d71ba;
  color: white;
`;

const Form = styled.form`
  height: 300px;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 50px auto;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px #000;
  background: ${props => props.theme.secondary};
`;

// const Button = styled.button`
//   display: inline-block;
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
//   display: block;
//   :hover {
//     background: #83c441;
//     color: white;
//   }
// `;

const Button = styled.button`
  width: 100px;
  padding: 5px 10px;
  border: none;
  align-self: center;
  margin: 10px auto;
  :hover {
    background: #83c441;
    color: white;
  }
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'white'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export default function Register() {
  return (
    <ThemeProvider theme={theme}>
      <Component>
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
      </Component>
    </ThemeProvider>
  );
}
