import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import AddRecord from './AddRecord';

export default function Child(props) {
  const { data, dispatchData } = useDataContext();
  const [age, setAge] = useState();
  const [avatar, setAvatar] = useState('');

  const avatars = ['🧒', '🧒🏻', '🧒🏼', '🧒🏽', '🧒🏾', '🧒🏿'];

  useEffect(() => {
    const childId = Number(props.match.params.id);
    const childData = data.children.find(el => el.id === childId);
    dispatchData({ type: 'SET_CHILD', payload: childData });

    const dobString = new Date(data.child.dob);
    const age =
      (Date.now() - dobString.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    setAge(Math.floor(age));

    const random = Math.floor(Math.random() * 5);
    setAvatar(avatars[random]);
  }, []);

  return (
    <ChildWrapper>
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
      <ChildInfo>
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
            <strong>Parent:</strong> {data.child.parentname}
          </p>
          <p>
            <strong>Parent Contact:</strong> {data.child.parentcontact}
          </p>
        </ChildText>
        <Avatar>{avatar}</Avatar>
      </ChildInfo>
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
          {data.child.screenings.map(el => (
            <tr key={el.date}>
              <td>{el.date}</td>
              <td>{el.weight}</td>
              <td>{el.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddRecord />
    </ChildWrapper>
  );
}

const ChildWrapper = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: black;
    :hover {
      color: #0d71ba;
    }
  }
  table {
    font-family: inherit;
    width: 90%;
    max-width: 700px;
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

const ChildInfo = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-evenly;
  margin: 0 auto;
`;

const ChildText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 1px 2px 3px #000;
  padding: 10px 20px;
`;

const Avatar = styled.div`
  font-size: 200px;
  background-color: #e6e6e6;
  border-radius: 20px;
`;
