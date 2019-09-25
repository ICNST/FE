import React from 'react';
import styled from 'styled-components';

import { Input } from '../styled-components';

export default function AddRecord() {
  return (
    <Component>
      <h3>Add New Record:</h3>
      <Form>
        <div>
          <label htmlFor='date'>Date</label>
          <Input type='date' id='date' name='date' />
        </div>

        <div>
          <label htmlFor='weight'>Weight</label>
          <Input
            type='text'
            id='weight'
            name='weight'
            placeholder='Weight (kg)'
          />
        </div>

        <div>
          <label htmlFor='height'>Height</label>
          <Input
            type='text'
            id='height'
            name='countryname'
            placeholder='Height (cm)'
          />
        </div>
        <Button type='submit'>➕</Button>
      </Form>
    </Component>
  );
}

const Component = styled.div`
  // background: #83c441;
  // color: red;
`;

const Form = styled.form`
  // height: 300px;
  // width: 250px;
  width: 75%;
  display: flex;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px #000;
  background-color: #0d71ba;
  color: white;
  font-weight: bold;
`;

const Button = styled.button`
  font-size: 15px;
  margin: 10px auto;
  padding: 5px 15px;
  border: none;
  border-radius: 3px;
  // display: block;
  cursor: pointer;
  :hover {
    background: #83c441;
    color: white;
  }
`;
