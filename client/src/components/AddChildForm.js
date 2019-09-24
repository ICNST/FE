import React from 'react';
import styled from 'styled-components';

export default function AddChildForm() {
  return (
    <Form>
        <label>Full Name</label>
        <input type='text' id='child_name' name='child_name' />

        <label>Date of Birth</label>
        <input type='text' id='child_dob' name='child_dob' />

        <span>
            Male
            <input type='radio' id='male' name='gender' value='male' />
            Female
            <input type='radio' id='female' name='gender' value='female' />
      </span>
        

        <label>Parent Name</label>
        <input type='text' id='parent_name' name='parent_name' />

        <label>Parent Contact</label>
        <input type='text' id='parent_contact' name='parent_contact' />

      {/* <Button type='submit'>➕ Add Child</Button> */}
    </Form>
  );
}

// Styles
const Form = styled.form`
width: 90%;
max-width: 800px;
margin: 0 auto;
display: flex;
flex-direction: column
box-shadow: 1px 2px 3px #000;
`;

// const Button = styled.button`
//   width: 100px;
//   padding: 5px 10px;
//   border: none;
//   align-self: center;
//   margin: 10px auto;
//   :hover {
//     background: #83c441;
//     color: white;
//   }
// `;
