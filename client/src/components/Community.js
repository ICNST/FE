import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import { DataContext } from '../contexts/DataContext';

export default function Community() {
  const { data, dispatchData } = useContext(DataContext);
  console.log(data);

  return (
    <section className='child-data-wrapper'>
      <h1>{data.community}</h1>
      <RecordsWrapper>
        <TR>
          <th>Name</th>
          <th>DOB</th>
          <th>Gender</th>
          <th>Parent</th>
        </TR>
        {data.children.map(el=> (
          <Link>
            <TR>
              <td>{el.name}</td>
              <td>{el.dob}</td>
              <td>{el.gender}</td>
              <td>{el.parentname}</td>
            </TR>
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

const TR = styled.tr`
display: flex;
justify-content: space-between;
text-align: left;
padding: 10px;
border: 1px solid grey;
`;