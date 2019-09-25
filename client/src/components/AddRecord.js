import React, { useState } from 'react';
import styled from 'styled-components';

import { Input } from '../styled-components';

export default function AddRecord() {
  const [addNewRecord, setAddNewRecord] = useState({
    date: '',
    weight: '',
    height: '',
  });

  const handleChange = e =>
    setAddNewRecord({
      ...addNewRecord,
      [e.target.name]: e.target.value,
    });

  const handleClick = e => {
    e.preventDefault();
    console.log(addNewRecord);
  };

  return (
    <Component>
      <h3>Add New Record:</h3>
      <Form>
        <div>
          {/* <label htmlFor='date'>Date</label> */}
          <Input type='date' id='date' name='date' onChange={handleChange} />
        </div>

        <div>
          {/* <label htmlFor='weight'>Weight</label> */}
          <Input
            type='text'
            id='weight'
            name='weight'
            placeholder='Weight (kg)'
            onChange={handleChange}
          />
        </div>

        <div>
          {/* <label htmlFor='height'>Height</label> */}
          <Input
            type='text'
            id='height'
            name='height'
            placeholder='Height (cm)'
            onChange={handleChange}
          />
        </div>

        <Button type='submit' onClick={handleClick}>
          ➕
        </Button>
      </Form>
    </Component>
  );
}

const Component = styled.div`
  // background: #83c441;
  // color: red;
`;

const Form = styled.form`
  width: 90%;
  max-width: 800px;
  width: 75%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px #000;
  background: #0d71ba;
  color: white;
  font-weight: bold;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background: #83c441;
    color: white;
  }
`;
