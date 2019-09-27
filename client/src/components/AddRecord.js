import React, { useState } from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from '../styled-components';

import { useDataContext } from '../contexts/DataContext';

function AddRecord(props) {
  const { dispatchData } = useDataContext();
  const [newRecord, setNewRecord] = useState({
    date: '',
    weight: '',
    height: '',
  });

  console.log(props);

  const handleChange = e =>
    setNewRecord({
      ...newRecord,
      [e.target.name]: e.target.value,
    });

  const handleClick = e => {
    e.preventDefault();
    console.log(newRecord);
    // axiosWithAuth()
    //   .post()
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    dispatchData({
      type: 'ADD_RECORD',
      payload: newRecord,
      id: props.match.params.id,
    });
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
  margin: 0 auto;
`;

const Form = styled.form`
  width: 90%;
  // max-width: 800px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 10px;
  margin: 0 auto;
  box-shadow: 1px 2px 3px #000;
  background: #0d71ba;

  font-weight: bold;
  div {
    max-width: 25%;
    input {
      max-width: 90%;
    }
  }

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding-top: 10px;

    button {
      width: 40px;
    }
    div {
      max-width: 100%;
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

export default withRouter(AddRecord);
