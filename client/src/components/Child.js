import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

import AddRecord from './AddRecord';
import Graph from './Graph';

export default function Child(props) {
  const { data, dispatchData } = useDataContext();
  const [dob, setDob] = useState();
  const [age, setAge] = useState();
  const [avatar, setAvatar] = useState('');

  const avatars = ['🧒', '🧒🏻', '🧒🏼', '🧒🏽', '🧒🏾', '🧒🏿'];

  useEffect(() => {
    const childId = Number(props.match.params.id);

    axiosWithAuth()
      .get(`/children/${childId}`)
      .then(res => {
        // console.log(res.data);
        dispatchData({ type: 'SET_CHILD', payload: res.data });
        axiosWithAuth()
          .get(`/countries/${res.data.country_id}`)
          .then(res => {
            // console.log(res.data);
            dispatchData({ type: 'SET_COUNTRY', payload: res.data });
          })
          .catch(err => {
            console.log(err);
          });
        axiosWithAuth()
          .get(`/communities/${res.data.community_id}`)
          .then(res => {
            // console.log(res.data);
            dispatchData({ type: 'SET_COMMUNITY', payload: res.data });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });

    const random = Math.floor(Math.random() * 5);
    setAvatar(avatars[random]);
  }, []);

  useEffect(() => {
    if (data.child) {
      const dobObj = new Date(data.child.DOB);

      const day = dobObj.getDate();
      const month = dobObj.getMonth();
      const year = dobObj.getFullYear();

      setDob(`${month}/${day}/${year}`);

      const age =
        (Date.now() - dobObj.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
      setAge(Math.floor(age));
    }

    if (data.child.screenings) {
      const screenings = data.child.screenings.map(obj => {
        const date = new Date(obj.date);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return { ...obj, date: `${month}/${day}/${year}` };
      });
      dispatchData({ type: 'SET_SCREENINGS', payload: screenings });
    }
  }, [data.child]);

  return (
    <PageWrapper>
      <h2>
        <Link to={`/country/${data.country.id}`}>{data.country.country}</Link> -{' '}
        <Link to={`/community/${data.community.id}`}>
          {data.community.community}
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
                <strong>Date of Birth:</strong> {dob}
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

          <DivTwo>
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
                  {data.screenings &&
                    data.screenings.map(el => (
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
              <Graph screenings={data.screenings} />
            </div>
          </DivTwo>
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
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;
`;

const DivOne = styled.div`
  display: flex;
  width: 30%;
  align-content: space-around;
  margin: 0 auto;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    flex-direction: row;
    width: 100%;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column-reverse;
    margin: 0 auto;
    max-width: 100%;
    width: 100%;
  }
`;

const DivTwo = styled.div`
  max-width: 70%;
  display: flex;
  justify-content: space-evenly;

  div {
    width: 45%;
    div {
      width: 100%;
    }
  }

  @media screen and (max-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 95%;
    div {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    max-width: 95%;
    margin: 0 auto;
    div {
      width: 100%;
    }
  }
`;

const ChildText = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: left;
  box-shadow: 1px 2px 3px #000;
  padding: 10px 20px;
  margin: 10px auto;

  @media screen and (max-width: 780px) {
    max-width: 100%;
    margin-top: 20px;
    p {
      margin: 0.5em 0;
    }
  }
`;

const Avatar = styled.div`
  font-size: 15rem;
  background-color: #e6e6e6;
  border-radius: 20px;
  margin: 20px auto;
`;

const ChartsAndData = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    max-width: 100%;
    margin: 0 auto;
  }
`;
