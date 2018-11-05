import React from 'react';
import { Link } from 'react-router'

const NavBar = props => {
  return(
      <div>
        <div id="navbar">
          <Link to='/' id="router">My Profile</Link>
          <Link to='/funders' id="router">All Funders</Link>
          <Link to='/programs' id="router">All Programs</Link>
        </div>
        {props.children}
      </div>
  )
}

export default NavBar;
