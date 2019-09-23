import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TempNav() {
  return (
    <div>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/admin'>Admin</NavLink>
      <NavLink to='/country'>Country</NavLink>
      <NavLink to='/community'>Community</NavLink>
      <NavLink to='/child'>Child</NavLink>
    </div>
  );
}
