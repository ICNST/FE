import styled from 'styled-components';

export const theme = {
  primary: '#83c441',
  secondary: '#0d71ba',
  font:'Open Sans', 
};
export const H1=styled.h1`
font-family:${(props)=>props.theme.font}
`
export const Label=styled.label`
font-family:${(props)=>props.theme.font}
`

export const Span=styled.label`
font-family:${(props)=>props.theme.font}
`

export const Form = styled.form`
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 50px auto;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px #000;
  background: ${props => props.theme.secondary};
  color: white;
`;

export const Button = styled.button`
  padding: 5px 15px;
  border: none;
  align-self: center;
  margin: 10px auto;
  font-family: inherit;
  font-size: 15px;
  cursor: pointer;
  :hover {
    background: ${props => props.theme.primary};
    color: white;
  }
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-family: inherit;
  font-size: 15px;
`;

export const Countries = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 1px 2px 3px #000;
`;

export const Country = styled.div`
  border: 1px solid silver;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  button {
    cursor: pointer;
    padding: 5px 10px;
    border: none;

    :hover {
      background: #83c441;
      color: white;
    }
  }
`;

export const AddCountry = styled.div`
  border: 1px solid silver;
  display: flex;
  align-items: center;
  padding: 10px;

  input {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    border: none;
    margin: 18.72px 0px;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;
export const RecordsWrapper = styled.table`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 3px #000;
`;

export const TR = styled.tr`
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding: 10px;
  border: 1px solid grey;
`;

export const AddChild = styled.div`
  border: 1px solid silver;
  display: flex;
  align-items: center;
  padding: 10px;

  input {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    border: none;
    margin: 18.72px 0px;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;
export const CommunitiesWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 1px 2px 3px #000;
`;

export const CommunityDiv = styled.div`
  border: 1px solid silver;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  text-align: left;

  button {
    cursor: pointer;
    padding: 5px 10px;
    border: none;

    :hover {
      background: #83c441;
      color: white;
    }
  }
`;

export const AddCommunity = styled.div`
  border: 1px solid silver;
  display: flex;
  align-items: center;
  padding: 10px;

  input {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    border: none;
    margin: 18.72px 0px;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;
