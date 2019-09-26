import React, { useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { useUserContext } from '../contexts/UserContext';
import { useDataContext } from '../contexts/DataContext';

function Nav(props) {
  const { user, dispatch } = useUserContext();
  const { dispatchData } = useDataContext();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch({ type: 'LOGIN_TRUE' });
    }
  }, []);

  return (
    <NavBarColor>
      {/* {user.isLoggedIn && (
        <UserInfo>
          <p>Hello, {user.username}!</p>
        </UserInfo>
      )} */}
      <NavBar>
        {props.location.pathname === '/register' && (
          <NavLink to='/login'>Login</NavLink>
        )}
        {props.location.pathname === '/login' && (
          <NavLink to='/register'>Register</NavLink>
        )}
        {localStorage.getItem('usertype') === 'admin' && (
          <NavLink to='/admin'>Admin</NavLink>
        )}
        {user.isLoggedIn && (
          <SignOutBtn
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('usertype');
              localStorage.removeItem('country');
              dispatchData({ type: 'RESET_DATA' });
              dispatch({ type: 'LOGOUT' });
              props.history.push('/login');
            }}>
            Sign Out
          </SignOutBtn>
        )}
      </NavBar>
    </NavBarColor>
  );
}

const NavBarColor = styled.div`
  background-color: #0d71ba;
  padding: 5px;
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 40px;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

// const UserInfo = styled.div`
//   margin-left: 10px;

//   p {
//     padding: 0;
//     margin: 0;
//     color: white;
//   }
// `;

const NavBar = styled.div`
  display: flex;
  margin-right: 40px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-right: 0px;
  }

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
  margin-left: 30px;

  :hover {
    color: #83c441;
  }

  @media screen and (max-width: 500px) {
    margin-left: 0px;
  }
`;

export default withRouter(Nav);
