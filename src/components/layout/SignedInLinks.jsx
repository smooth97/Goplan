import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => {
  return (
    <div className="loginMenu">
      <h3>
        <NavLink to="/create">New Posting</NavLink>
      </h3>
      <h3>
        <a onClick={props.signOut}>Log Out</a>
      </h3>
    </div>
    //   <NavLink to="/" className="btn btn-floating pink lighten-1">
    //     승진
    //   </NavLink>
  );
};

const mapDispathToprops = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(
  null,
  mapDispathToprops,
)(SignedInLinks);
