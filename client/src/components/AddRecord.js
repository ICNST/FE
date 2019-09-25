import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import {  theme } from "../styled-components/index";

// const Component = styled.div`
//   // background: #83c441;
//   // color: red;
// `;

const Form = styled.form`
  height: 300px;
  width: 250px;
  width: 75%;
  display: flex;
   flex-direction: column;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px #000;
`;

const Button = styled.button`
  display: inline-block;
   color: palevioletred;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
   border: 2px solid palevioletred;
  border: none;
  border-radius: 3px;
  display: block;
  :hover {
    background: #83c441;
    color: white;
  }
`;
const Input = styled.input`
  margin: 0.5em;
  padding: 0.25em 1em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-family: inherit;
  font-size: inherit;
`;

export default function AddRecord() {
  return (
     <>
      <h3>Add New Record:</h3>
      <Form>
        {/* <label>Date</label> */}
        <Input type="date" id="date" name="date" />

        {/* <label>Weight</label> */}
        <Input
          type="text"
          id="weight"
          name="weight"
          placeholder="Weight (kg)"
        />

        {/* <label>Height</label> */}
        <Input
          type="text"
          id="height"
          name="countryname"
          placeholder="Height (cm)"
        />
        <Button type="submit">➕</Button>
      </Form>
    
    // </>
  );
}
