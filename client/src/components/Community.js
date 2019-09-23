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
        {data.children.map(el=> (
          <Link>
            <KidsRecords>
              <p>{el.name}</p>
              <p>{el.dob}</p>
              <p>{el.gender}</p>
              <p>{el.parentname}</p>
              <p>View Record</p>
            </KidsRecords>
          </Link>
        ))}
      </RecordsWrapper>
    </section>
  );
}

const RecordsWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column
  box-shadow: 1px 2px 3px #000;
`;

const KidsRecords = styled.div`
  padding: 10px;
  text-align: left;
  display: flex;
  justify-content: space-between;
`;