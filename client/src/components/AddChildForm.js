import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';
import { useDataContext } from '../contexts/DataContext';

export default function AddChildForm() {
  const { data, dispatchData } = useDataContext();

  const [newChild, setNewChild] = useState({
    name: '',
    DOB: '',
    parent_name: '',
    contact: '',
    gender: '',
    country_id: data.country.id,
  });

  const handleChange = e =>
    setNewChild({
      ...newChild,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(newChild);
    axiosWithAuth()
      .post(`/communities/${data.community.id}/children`, newChild)
      .then(res => {
        // console.log(res);
        dispatchData({
          type: 'ADD_CHILD',
          payload: res.data.added,
        });
        setNewChild({
          name: '',
          DOB: '',
          parent_name: '',
          contact: '',
          gender: '',
          country_id: data.country.id,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type='text'
        id='name'
        name='name'
        value={newChild.name}
        placeholder='Name'
        onChange={handleChange}
      />

      <select
        id='gender'
        name='gender'
        onChange={handleChange}
        value={newChild.gender}>
        <option>Gender</option>
        <option value='M'>Male</option>
        <option value='F'>Female</option>
      </select>

      <input
        type='text'
        id='DOB'
        name='DOB'
        value={newChild.DOB}
        placeholder='DOB'
        onChange={handleChange}
      />

      <input
        type='text'
        id='parent_name'
        name='parent_name'
        value={newChild.parent_name}
        placeholder='Parent Name'
        onChange={handleChange}
      />

      <input
        type='text'
        id='contact'
        name='contact'
        value={newChild.contact}
        placeholder='Contact'
        onChange={handleChange}
      />

      <button type='submit'>
        <span role='img' aria-label='add child'>
          ➕
        </span>
      </button>
    </Form>
  );
}

// Styles
const Form = styled.form`
width: 90%;
max-width: 800px;
margin: 10px auto;
padding: 10px 0;
display: flex;
justify-content: space-between;
background: #fff;
box-shadow: 1px 2px 3px #000;
text-align: left;
background: #0d71ba;

@media screen and (max-width: 780px) {
  flex-direction: column;
  align-items: center;
  width: 300px;
}

input, select {
    width: 17%;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin: 0.5em;
    padding: 0.25em 1em;
    background: papayawhip;
    border: none;
    border-radius: 3px;

    @media screen and (max-width: 780px) {
      width: 230px;
    }
  }

button {
    cursor: pointer;
    font-size: 1em;
    background: #e6e6e6;
    border: none;
    margin: 0.5em;
    border-radius: 3px;
    padding: 0.25em 1em;
    :hover {
      background: #83c441;
      color: white; 
  }
`;
