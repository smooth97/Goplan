import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <div className="loginMenu">
      <h3>
        <NavLink to="/signup">Signup</NavLink>
      </h3>
      <h3>
        <NavLink to="/signin">Login</NavLink>
      </h3>
    </div>
  );
};

export default SignedOutLinks;
