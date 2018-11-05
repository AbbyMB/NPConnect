import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

const UserShowHeader = props => {
  return(
    <div id="welcome-name">
      <h3>Welcome, {window.currentUser.username}</h3>
    </div>
  )
}

export default UserShowHeader;
