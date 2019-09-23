import React from 'react';
import {Link} from 'react-router-dom';
import Community from './Community';
import styled from 'styled-components';


export default function Country(country, props) {
  return( 
    <section className = 'country-communities'>
      <img className='flag-icon' src={country.imageURL} alt={country.name}/>
      <h1>{country.name}</h1>

      <CommunityWrapper>
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
      </CommunityWrapper>

      {/* Add Group Form */}
      <div className='add-community-wrapper'>
        <form className='add-community'>
          <label>Community Name</label>
          <input type='text' id='comm-name' name='comm-name'/>
          <button type='submit'>Add</button>
        </form> 
      </div>

    </section>
  );
}




// Styles
const CommunityWrapper= styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
`;