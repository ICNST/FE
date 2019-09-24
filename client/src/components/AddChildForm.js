import React from 'react';
import styled from 'styled-components';

export default function AddChildForm() {
  return (
    <Form>
        <button type='submit'>➕</button>
        
        <input type='text' id='child_name' name='child_name' placeholder='Full Name'/>

        <input type='text' id='child_dob' name='child_dob' placeholder='Date of Birth'/>
        

        <span>
            Male
            <input type='radio' id='male' name='gender' value='male' />
            Female
            <input type='radio' id='female' name='gender' value='female' />
        </span>
        
        <input type='text' id='parent_name' name='parent_name' placeholder='Parent Name'/>

        <input type='text' id='parent_contact' name='parent_contact' placeholder='Parent Contact'/>
        
        
    </Form>
  );
}

// Styles
const Form = styled.form`
width: 90%;
max-width: 800px;
margin: 5px auto;
display: flex;
flex-direction: column;

background: white;
box-shadow: 1px 2px 3px #000;
text-align: left;


input {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin: 5px;
  }

button {
    cursor: pointer;
    font-size: 20px;
    background: none;
    border: none;
  }
`;

