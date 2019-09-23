import React from 'react';
import styled from 'styled-components';

export default function Login() {
  

  return (
  <Form>
    <span>

    User<input type='radio' name='User' value='user'/>
    Admin<input type='radio' name='Admin' value='admin'/>
    </span>

    <label>Username</label>
    <input type='text' id='username' name='username' />

    <label>Password</label>
    <input type='text' id='password' name='password'/>

    <Button type='submit'>Login</Button>
  </Form>
  )
}

// Styles
const Form = styled.form`
  height: 300px;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 50px auto;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px #000;
`;

const Button = styled.button`
  width: 100px;
  padding: 5px 10px;
  border: none;
  align-self: center;
  margin: 10px auto;
  :hover{
    background: #83c441;
    color: white
  }
`;