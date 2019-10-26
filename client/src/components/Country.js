import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';
import { useUserContext } from '../contexts/UserContext';

export default function Country(props) {
  const { data, dispatchData } = useDataContext();
  const { user } = useUserContext();
  const [newCommunity, setNewCommunity] = useState('');

  const countryId = props.match.params.id;

  useEffect(() => {
    axiosWithAuth()
      .get(`/countries/${countryId}`)
      .then(res => {
        // console.log(res.data);
        dispatchData({ type: 'SET_COUNTRY', payload: res.data });
      });

    axiosWithAuth()
      .get(`/countries/${countryId}/communities`)
      .then(res => {
        // console.log(res.data);
        dispatchData({ type: 'SET_COMMUNITIES', payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }, [data.communities]);

  const handleChange = e => setNewCommunity(e.target.value);

  const handleClick = e => {
    e.preventDefault();
    console.log(newCommunity);
    axiosWithAuth()
      .post(`/countries/${countryId}/communities`, { community: newCommunity })
      .then(res => {
        console.log(res);
        dispatchData({ type: 'ADD_COMMUNITY', payload: res.data.added });
        setNewCommunity('');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleDelete = country => {
    console.log(country.id);
    axiosWithAuth()
      .delete(`/communities/${country.id}`)
      .then(res => {
        console.log(res);
        dispatchData({ type: 'DELETE_COMMUNITY', payload: country.id });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <section className='country-communities'>
      <h1>{data.country.country}</h1>
      <CommunitiesWrapper>
        {data.communities &&
          data.communities.map(el => (
            <CommunityDiv key={el.id}>
              <Link to={`/community/${el.id}`}>
                <h3>{el.community}</h3>
              </Link>
              {user.usertype === 'admin' && (
                <button onClick={() => handleDelete(el)}>
                  <span role='img' aria-label='delete community'>
                    ✖️
                  </span>
                </button>
              )}
            </CommunityDiv>
          ))}
        <AddCommunity>
          <button type='submit' onClick={handleClick}>
            <span role='img' aria-label='add community'>
              ➕
            </span>
          </button>
          <input
            type='text'
            placeholder='Add a New Community'
            value={newCommunity}
            onChange={handleChange}
          />
        </AddCommunity>
      </CommunitiesWrapper>
    </section>
  );
}

// Styles
const CommunitiesWrapper = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 1px 2px 3px #000;
`;

const CommunityDiv = styled.div`
  border: 1px solid silver;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  text-align: left;
  a {
    text-decoration: none;
    color: black;
  }
  :hover {
    background: #0d71ba;
    a {
      color: white;
    }
  }

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

const AddCommunity = styled.div`
  border: 1px solid silver;
  display: flex;
  align-items: center;
  padding: 10px;
  height: 50px;

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
