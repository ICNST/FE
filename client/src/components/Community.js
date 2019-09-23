import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import { DataContext } from '../contexts/DataContext';

export default function Community() {
  const { data, dispatchData } = useContext(DataContext);
  console.log(data);

  return (
    <section className='child-data-wrapper'>
      <h1>the Village</h1>
      <RecordsWrapper>
        <td>Name</td>
        <td>DOB</td>
        <td>Gender</td>
        <td>Parent</td>
        {data.children.map(el=> (
          <Link>
            <KidsRecords>
              <td>{el.name}</td>
              <td>{el.dob}</td>
              <td>{el.gender}</td>
              <td>{el.parentname}</td>
              <td>View Record</td>
            </KidsRecords>
          </Link>
        ))}
      </RecordsWrapper>
    </section>
  );
}

const RecordsWrapper = styled.table`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column
  box-shadow: 1px 2px 3px #000;
`;

const KidsRecords = styled.table`
  padding: 10px;
  text-align: left;
  display: flex;
  justify-content: space-between;
`;