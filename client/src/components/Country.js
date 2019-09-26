import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { testData } from '../testData';
import styled from 'styled-components';

import { useDataContext } from '../contexts/DataContext';

export default function Country(props) {
  const { data, dispatchData } = useDataContext();
  const [newCommunity, setNewCommunity] = useState('');
  console.log('Country Component:', data);
  // console.log(props);

  useEffect(() => {
    const countryName = props.match.params.id;
    // console.log(countryName);
    dispatchData({ type: 'SET_COUNTRY', payload: countryName });
    // axiosWithAuth()
    //   .get()
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    const countryData = testData.filter(el => el.country === countryName);
    const communities = countryData[0].communities;
    dispatchData({ type: 'SET_COMMUNITIES', payload: communities });
  }, []);

  const handleChange = e => setNewCommunity(e.target.value);

  // console.log(newCommunity);

  const handleClick = e => {
    e.preventDefault();
    console.log(newCommunity);
    // axiosWithAuth()
    //   .post()
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  return (
    <section className='country-communities'>
      <h1>{props.match.params.id}</h1>
      <CommunitiesWrapper>
        {data.communities.map(el => (
          <CommunityDiv>
            <Link
              key={el.id}
              to={`/community/${el.community.split(' ').join('-')}`}>
              <h3>{el.community}</h3>
            </Link>
            <button>✖️</button>
          </CommunityDiv>
        ))}
        <AddCommunity>
          <button type='submit' onClick={handleClick}>
            ➕
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

{
  /* <CommunityWrapper>
<section className='all-communities'>
  {props.communities.map(community=>{ return(
    <div className='community-card' key={community.id}>
      <h2>Village: {community.name}</h2>
      <Link to={`/country/${community.id}`}>
        <p>Local Health Records</p>
      </Link>
    </div>
  )})}

</section>    
</CommunityWrapper>  */
}
