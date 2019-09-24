import React from 'react';
import styled from 'styled-components';

export default function AddChildForm() {
  return (
    <Form>    
        <input type='text' id='child_name' name='child_name' placeholder='Full Name'/>

        <input type='text' id='child_dob' name='child_dob' placeholder='Date of Birth'/>

        <span>
            <label>Male</label>
            <input type='radio' id='male' name='gender' value='male' />
            <label>Female</label>
            <input type='radio' id='female' name='gender' value='female' />
        </span>
        
        <input type='text' id='parent_name' name='parent_name' placeholder='Parent Name'/>

        <input type='text' id='parent_contact' name='parent_contact' placeholder='Parent Contact'/>
        
        <button type='submit'>➕ Add Child</button>
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
flex-direction: column;
align-items: center;
background: #e6e6e6;
box-shadow: 1px 2px 3px #000;
text-align: left;

span{
    display: flex;
    width: 25%;
    justify-content: space-between;
}
input {
    width: 70%;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin: 5px;
  }

button {
    cursor: pointer;
    font-size: 15px;
    background: none;
    border: none;
    :hover{
        transform: scale(1.1);
    }
  }
`;

