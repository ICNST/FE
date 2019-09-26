import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';
import { Input } from '../styled-components';

import { useDataContext } from '../contexts/DataContext';

export default function AddRecord() {
  const { data, dispatchData } = useDataContext();

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
    // axiosWithAuth()
    //   .post()
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
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

  @media screen and (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding-top: 10px;

    input {
      width: 230px;
    }

    button {
      width: 40px;
    }
  }
`;

const Button = styled.button`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border: none;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  :hover {
    background: #83c441;
    color: white;
  }
`;
