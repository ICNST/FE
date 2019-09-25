import React, {useState} from 'react';
import styled from 'styled-components';

export default function AddChildForm() {

  const [addNewChild, setAddNewChild] = useState({
    childName: '',
    childDob: '',
    parentName: '',
    parentContact: '',
    gender: '',
  })

  const handleChange = e =>
  setAddNewChild({
    ...addNewChild,
    [e.target.name]: e.target.value,
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(addNewChild);
  };

  return (
    <Form onSubmit={handleSubmit}>    
        <input type='text' id='childName' name='childName' placeholder='Full Name' onChange={handleChange}/>

        {/* <input type='text' id='child_dob' name='child_dob' placeholder='Date of Birth' onChange={handleChange}/> */}
        
        <input type='text' id='parentName' name='parentName' placeholder='Parent Name' onChange={handleChange}/>

        <input type='text' id='parentContact' name='parentContact' placeholder='Parent Contact' onChange={handleChange}/>

        <input type='text' id='gender' name='gender' placeholder='M/F' onChange={handleChange}/>

        {/* <span>
            <label>Male</label>
            <input type='radio' id='male' name='gender' value='male' />
            <label>Female</label>
            <input type='radio' id='female' name='gender' value='female' />
        </span>  */}

        <button type='submit'>➕</button>
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
align-items: center;
background: #fff;
box-shadow: 1px 2px 3px #000;
text-align: left;
background: #0d71ba;

span{
    display: flex;
    width: 25%;
}
input {
    max-width: 15%;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin: 0.5em;
    padding: 0.25em 1em;
    background: papayawhip;
    border: none;
  }
  input:last-child{
    width: 15%;
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

