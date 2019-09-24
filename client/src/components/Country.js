import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {
  Form,
  Button,
  Input,
  theme,
  CommunitiesWrapper,
  CommunityDiv,
  AddCommunity
} from "../styled-components/index";

import { DataContext } from '../contexts/DataContext';

export default function Country(props) {
  const { data, dispatchData } = useContext(DataContext);
  console.log(data);
  console.log(props);
  
  useEffect(()=>{
    const countryName=props.match.params.id;
    console.log(countryName);
    dispatchData({type:'SET_COUNTRY', payload: countryName})
  },[]);
  
  return( 
    <section className = 'country-communities'>
      {/* <img className='flag-icon' src={country.imageURL} alt={country.name}/> */}
      <h1>{data.country}</h1>
      <CommunitiesWrapper>
        {data.communities.map(el => (
          <CommunityDiv>
            <Link key={el} to={`/community/${el.split(' ').join('-')}`}>
              <h3>{el}</h3>
              <p>Check Local Health Records</p>
            </Link>
            <button>X</button>
          </CommunityDiv>
        ))}
        <AddCommunity>
          <Button type='submit'>➕</Button>
          <Input type='text' placeholder='Add a New Community' />
        </AddCommunity>
      </CommunitiesWrapper>
    </section>
  );
}


// Styles
// const CommunitiesWrapper = styled.div`
//   width: 90%;
//   max-width: 800px;
//   margin: 0 auto;
//   box-shadow: 1px 2px 3px #000;
// `;

// const CommunityDiv = styled.div`
//   border: 1px solid silver;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   text-align: left;

//   button {
//     cursor: pointer;
//     padding: 5px 10px;
//     border: none;

//     :hover {
//       background: #83c441;
//       color: white;
//     }
//   }
// `;

// const AddCommunity = styled.div`
//   border: 1px solid silver;
//   display: flex;
//   align-items: center;
//   padding: 10px;

//   input {
//     font-family: inherit;
//     font-size: inherit;
//     font-weight: inherit;
//     border: none;
//     margin: 18.72px 0px;
//   }

//   button {
//     cursor: pointer;
//     background: none;
//     border: none;
//   }
// `;



{/* <CommunityWrapper>
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
</CommunityWrapper>  */}