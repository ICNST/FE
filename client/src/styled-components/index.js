import styled from 'styled-components';

export const Form = styled.form`
  height: 300px;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 50px auto;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px #000;
`;

export const Button = styled.button`
  width: 100px;
  padding: 5px 10px;
  border: none;
  align-self: center;
  margin: 10px auto;
  :hover {
    background: #83c441;
    color: white;
  }
`;
