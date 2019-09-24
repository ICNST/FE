import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export default function Login() {
  return (
    <ThemeProvider theme={theme}>
      <Form>
        <h3>Login:</h3>
        <span>
          User
          <input type='radio' id='User' name='useType' value='user' />
          Admin
          <input type='radio' id='Admin' name='useType' value='admin' />
        </span>

        <label>Username</label>
        <input type='text' id='username' name='username' />

        <label>Password</label>
        <input type='text' id='password' name='password' />

        <Button type='submit'>Login</Button>
      </Form>
    </ThemeProvider>
  );
}

// Styles

// const GlobalStyle =createGlobalStyle`
// body {
//   background-color: ${props =>
//     props.theme.mode === 'dark'? '#111': '#EEE'}
//     color:${props =>
//       props.theme.mode === 'dark' ? '#EEE': '#111'}
// }
// `

const theme = {
  primary: '#83c441',
  secondary: '#0d71ba',
};

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
  color: white;
`;

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
