import React from "react";
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

export default function AddRecord() {
  return (
    <Component>
      <Form>
        <label>Date</label>
        <Input type="Date" id="date" name="date" />

        <label>Weight</label>
        <Input type="text" id="weight" name="weight" placeholder="Weight" />

        <label>Height</label>
        <Input
          type="text"
          id="height"
          name="conteryrname"
          placeholder="Height"
        />

        <Button type="submit">Add Record</Button>
      </Form>
    </Component>
  );
}
