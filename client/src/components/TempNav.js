import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function TempNav() {
  return (
    <NavBar>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/admin'>Admin</NavLink>
      {/* <NavLink to='/country'>Country</NavLink>
      <NavLink to='/community'>Community</NavLink>
      <NavLink to='/child'>Child</NavLink> */}
    </NavBar>
  );
}

const NavBar = styled.div`
  width: 280px;
  margin: 0 auto 25px;
  display: flex;
  justify-content: space-between;

  a {
    color: black;
    text-decoration: none;
    font-weight: 600;

    :hover {
      color: #0d71ba;
    }
  }
`;
