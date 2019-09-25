import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function TempNav() {
  return (
    <NavBar>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/admin'>Admin</NavLink>
      <NavLink to='/login'>Sign Out</NavLink>
      {/* <NavLink to='/country'>Country</NavLink>
      <NavLink to='/community'>Community</NavLink>
      <NavLink to='/child'>Child</NavLink> */}
    </NavBar>
  );
}

const NavBar = styled.div`
  width: 50%;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;

  a {
    color: black;
    text-decoration: none;
    font-size: 18px;

    :hover {
      color: #0d71ba;
    }
  }
`;
