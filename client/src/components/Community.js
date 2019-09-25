import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDataContext } from '../contexts/DataContext';

import AddChildForm from './AddChildForm';

export default function Community(props) {
  const { data, dispatchData } = useDataContext();
  // console.log(data);

  useEffect(() => {
    const communityName = props.match.params.id;
    // console.log(communityName);
    dispatchData({ type: 'SET_COMMUNITY', payload: communityName });
  }, []);

  return (
    <ChildDataWrapper>
      <h1>
        <Link to={`/country/${data.country.split(' ').join('-')}`}>
          {data.country}
        </Link>{' '}
        - {data.community}
      </h1>
      <RecordsWrapper>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Parent</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {data.children.map(el => (
            <tr>
              <Link to={`/child/${el.id}`}>
                  <td>{el.name}</td>
                  <td>{el.gender}</td>
                  <td>{el.parentname}</td>
                  <td>{el.parentcontact}</td>
              </Link>
            </tr>
        ))}
          </tbody>
        </table>
      </RecordsWrapper>
      <h3>Add New Patient:</h3>
      <AddChildForm />
    </ChildDataWrapper>
  );
}

const ChildDataWrapper = styled.section`
a {
  text-decoration: none; 
  color: black;
  :hover {
    color: #0d71ba;
    }
  }
`;

const RecordsWrapper = styled.div`
  display: flex;
  flex-direction: column; 

table{
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 1px 2px 3px #000;
  border-collapse: collapse;
  
  tr{
    width: 100%;
    border: 1px solid green;
  }
  tr:nth-child(even) {
    background: #e6e6e6;
  }

  thead{
    background-color: #0d71ba;
    color: white;
    th {
      border: 1px solid yellow;
        padding: 10px 0;
    }
  }

 tbody{
   width: 100%;
  td{
     padding: 10px 0;
     width: 25%
     border: 1px solid pink;
    }
  }
}  
`;