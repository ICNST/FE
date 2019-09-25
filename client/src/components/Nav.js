import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { useUserContext } from '../contexts/UserContext';

function Nav(props) {
  const { user, dispatch } = useUserContext();

  return (
    <NavBarColor>
      <NavBar>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/admin'>Admin</NavLink>
        <SignOutBtn
          onClick={() => {
            localStorage.removeItem('token');
            dispatch({ type: 'LOGOUT' });
            props.history.push('/login');
          }}>
          Sign Out
        </SignOutBtn>
      </NavBar>
    </NavBarColor>
  );
}

const NavBarColor = styled.div`
  background-color: #0d71ba;
  padding: 5px;
  margin-top: 15px;
`;

const NavBar = styled.div`
  width: 50%;
  max-width: 475px;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;

    :hover {
      color: #83c441;
    }
  }
`;

const SignOutBtn = styled.button`
  border: none;
  background-color: #0d71ba;
  color: white;
  font-family: inherit;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    color: #83c441;
  }
`;

export default withRouter(Nav);
