import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DataContext } from '../contexts/DataContext';

import AddChildForm from './AddChildForm';

export default function Community(props) {
  const { data, dispatchData } = useContext(DataContext);
  // console.log(data);

  useEffect(() => {
    const communityName = props.match.params.id;
    // console.log(communityName);
    dispatchData({ type: 'SET_COMMUNITY', payload: communityName });
  }, []);

  return (
    <section className='child-data-wrapper'>
      <h1>
        <Link to={`/country/${data.country.split(' ').join('-')}`}>
          {data.country}
        </Link>{' '}
        - {data.community}
      </h1>
      <RecordsWrapper>
        <TR>
          <th>Name</th>
          <th>DOB</th>
          <th>Gender</th>
          <th>Parent</th>
        </TR>
        {data.children.map(el => (
          <Link to={`/child/${el.id}`}>
            <TR>
              <td>{el.name}</td>
              <td>{el.dob}</td>
              <td>{el.gender}</td>
              <td>{el.parentname}</td>
            </TR>
          </Link>
        ))}
        <AddChild>
          <button type='submit'>➕</button>
          <input type='text' placeholder='Add Child' />
        </AddChild>
      </RecordsWrapper>
      <AddChildForm />
    </section>
  );
}

const RecordsWrapper = styled.table`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 3px #000;
`;

const TR = styled.tr`
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding: 10px;
  border: 1px solid grey;
`;

const AddChild = styled.div`
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
