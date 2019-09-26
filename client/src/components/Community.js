import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDataContext } from '../contexts/DataContext';

import AddChildForm from './AddChildForm';

export default function Community(props) {
  const { data, dispatchData } = useDataContext();
  // console.log(data);

  useEffect(() => {
    const communityName = props.match.params.id.split('-').join(' ');
    // console.log(communityName);
    dispatchData({ type: 'SET_COMMUNITY', payload: communityName });
    const communityData = data.communities.filter(
      el => el.community === communityName,
    );
    const children = communityData[0].children;
    dispatchData({ type: 'SET_CHILDREN', payload: children });
  }, []);

  return (
    <ChildDataWrapper>
      <h1>
        <Link to={`/country/${data.country.split(' ').join('-')}`}>
          {data.country}
        </Link>{' '}
        - {data.community}
      </h1>
      <PatientsTable>
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
              </Link>
              <td>{el.gender}</td>
              <td>{el.parent_name}</td>
              <td>{el.contact}</td>
            </tr>
          ))}
        </tbody>
      </PatientsTable>
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

const PatientsTable = styled.table`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 1px 2px 3px #000;
  border-collapse: collapse;

  tr:nth-child(even) {
    background: #e6e6e6;
  }

  th {
    background-color: #0d71ba;
    color: white;
    padding: 10px 0;
  }

  td {
    padding: 10px 0;
    width: 25%;
  }
`;
