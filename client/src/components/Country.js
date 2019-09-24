import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { DataContext } from '../contexts/DataContext';

export default function Country(props) {
  const { data, dispatchData } = useContext(DataContext);
  console.log(data);
  console.log(props);

  useEffect(() => {
    const countryName = props.match.params.id;
    console.log(countryName);
    dispatchData({ type: 'SET_COUNTRY', payload: countryName });
  }, []);

  return (
    <section className='country-communities'>
      <h1>{data.country}</h1>
      <CommunitiesWrapper>
        {data.communities.map(el => (
          <CommunityDiv>
            <Link key={el} to={`/community/${el.split(' ').join('-')}`}>
              <h3>{el}</h3>
            </Link>
            <button>✖️</button>
          </CommunityDiv>
        ))}
        <AddCommunity>
          <button type='submit'>➕</button>
          <input type='text' placeholder='Add a New Community' />
        </AddCommunity>
      </CommunitiesWrapper>
    </section>
  );
}

// Styles
const CommunitiesWrapper = styled.div`
  width: 60%;
  max-width: 800px;
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
