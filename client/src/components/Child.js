import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { DataContext } from '../contexts/DataContext';
import AddRecord from "./AddRecord";

export default function Child(props) {
  const { data, dispatchData } = useContext(DataContext);

  useEffect(()=>{
    const childId=props.match.params.id;
    console.log(childId);
    // dispatchData({type:'SET_CHILD', payload: childId})
  },[]);

  return (
    <ChildWrapper>
      <h2><Link to={`/country/${data.country.split(" ").join("-")}`}>{data.country}</Link> - <Link to={`/community/${data.community.split(" ").join("-")}`}>{data.community}</Link> - {data.child.name}</h2>
      <div>
        <p>Parent: {data.child.parentname}</p>
        <p>Parent Contact: {data.child.parentcontact}</p>
        <p>Date of Birth: {data.child.dob}</p>
        <p>Gender: {data.child.gender}</p>
      </div>
      <table>
        <caption>
          <h3>Screenings:</h3>
        </caption>
        <thead>
          <tr>
            <th>Date</th>
            <th>Weight</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          {data.child.screenings.map(el => (
            <tr>
              <th>{el.date}</th>
              <th>{el.weight}</th>
              <th>{el.height}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add New Record</h2>
      <AddRecord />
    </ChildWrapper>
  );
}

const ChildWrapper = styled.div`
  display: flex;
  flex-direction: column;

  table {
    font-family: inherit;
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    table-layout: fixed;
    border-collapse: collapse;
    border: 3px solid purple;
  }
`;
