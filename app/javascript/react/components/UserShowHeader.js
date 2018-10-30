import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

const UserShowHeader = props => {
  return(
    <div>
      <h3>Welcome, {props.username}</h3>
    </div>
  )

}








export default UserShowHeader;
