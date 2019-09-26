import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import AddRecord from './AddRecord';
import Graph from './Graph';

export default function Child(props) {
  const { data, dispatchData } = useDataContext();
  const [age, setAge] = useState();
  const [avatar, setAvatar] = useState('');

  const avatars = ['🧒', '🧒🏻', '🧒🏼', '🧒🏽', '🧒🏾', '🧒🏿'];

  useEffect(() => {
    const childId = Number(props.match.params.id);
    const childData = data.children.find(el => el.id === childId);
    dispatchData({ type: 'SET_CHILD', payload: childData });

    const random = Math.floor(Math.random() * 5);
    setAvatar(avatars[random]);
  }, []);

  useEffect(() => {
    if (data.child) {
      const dobString = new Date(data.child.dob);
      const age =
        (Date.now() - dobString.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
      setAge(Math.floor(age));
    }
  }, [data.child]);

  if (!data.hasData) {
    if (localStorage.getItem('usertype') === 'admin') {
      return <Redirect to='/admin' />;
    } else {
      return <Redirect to={`/country/${localStorage.getItem('country')}`} />;
    }
  }

  return (
    <PageWrapper>
      <h2>
        <Link to={`/country/${data.country.split(' ').join('-')}`}>
          {data.country}
        </Link>{' '}
        -{' '}
        <Link to={`/community/${data.community.split(' ').join('-')}`}>
          {data.community}
        </Link>{' '}
        - {data.child.name}
      </h2>

      <ChildWrapper>
        
        <ChartsAndData>
          <DivOne>
            <Avatar>{avatar}</Avatar>
            <ChildText>
              <p>
                <strong>Age:</strong> {age}
              </p>
              <p>
                <strong>Date of Birth:</strong> {data.child.dob}
              </p>
              <p>
                <strong>Gender:</strong> {data.child.gender}
              </p>
              <p>
                <strong>Parent:</strong> {data.child.parent_name}
              </p>
              <p>
                <strong>Parent Contact:</strong> {data.child.contact}
              </p>
            </ChildText>
          </DivOne>
          <div>
            <table>
              <caption>
                <h3>Screenings:</h3>
              </caption>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Weight (kg)</th>
                  <th>Height (cm)</th>
                </tr>
              </thead>
              <tbody>
                {data.child.screenings &&
                  data.child.screenings.map(el => (
                    <tr key={el.date}>
                      <td>{el.date}</td>
                      <td>{el.weight}</td>
                      <td>{el.height}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <AddRecord />
          </div>
          <div>
            {data.child.screenings && (
              <Graph screenings={data.child.screenings} />
            )}
          </div>
        </ChartsAndData>
      
      </ChildWrapper>

    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 98%;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: black;
    :hover {
      color: #0d71ba;
    }
  }

  table {
    font-family: inherit;
    width: 85%;
    max-height: 300px;
    max-width: 800px;
    margin: 0 auto;
    table-layout: fixed;
    border-collapse: collapse;
    box-shadow: 1px 2px 3px #000;

    tr:nth-child(even) {
      background: #e6e6e6;
    }

    thead {
      background-color: #0d71ba;
      color: white;
      th {
        padding: 10px 0;
      }
    }

    tbody {
      td {
        padding: 10px 0;
      }
    }
  }
`;
const ChildWrapper = styled.div`
  display: flex
  max-width: 95%;
  margin: 0 auto;
  justify-content: space-between;
`;

const DivOne = styled.div`
  display: flex;
  width: 25%;
  align-content: space-between;
  margin: 0 auto;
  flex-direction: column;

  @media screen and (max-width: 620px) {
    flex-direction: column-reverse;
    margin: 0 auto;
  }
`;

const ChildText = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  text-align: left;
  box-shadow: 1px 2px 3px #000;
  padding: 10px 20px;
  margin-top: 20px;

  @media screen and (max-width: 620px) {
    width: 90%;
    margin-top: 20px;
    p {
      margin: 0.5em 0;
    }
  }
`;

const Avatar = styled.div`
  font-size: 200px;
  background-color: #e6e6e6;
  border-radius: 20px;
  margin: 20px auto;
`;

const ChartsAndData = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  div {
    width: 100%;
  }

  @media screen and (max-width: 620px) {
    flex-direction: column;
    max-width: 90%;
    margin: 0 auto;
  }
`;
