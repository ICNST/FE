import React from 'react';
import styled from "styled-components";

const Component = styled.div`
  background: #83c441;
  color: red;
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
`;

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  :hover {
    background: #83c441;
    color: white;
  }
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;


export default function Register() {
  return (
    <Component>
      <Form>
        <label>Username</label>
        <Input type="text" id="username" name="username" />

        <label>Password</label>
        <Input type="text" id="password" name="password" />

        <label>Countery</label>
        <Input type="text" id="conteryname" name="conteryrname" />

        <Button type="submit">Register</Button>
      </Form>
    </Component>
  );
}
