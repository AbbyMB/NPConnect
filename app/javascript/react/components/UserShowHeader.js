import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

const UserShowHeader = props => {
  return(
    <div>
      <h3 id="welcome-name">Welcome, {window.currentUser.username}</h3>
    </div>
  )
}

export default UserShowHeader;
