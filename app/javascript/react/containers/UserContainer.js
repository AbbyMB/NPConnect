import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import UserShowHeader from '../components/UserShowHeader'

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      email: "",
      username: "",
      firstName: "",
      lastName: ""
    }
  }

  componentDidMount() {
    fetch('/api/v1/current_user')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ id: body.id, username: body.username, email: body.email, firstName: body.first_name, lastName: body.last_name });
      }
    )
  }

  render(){
    return(
      <div>
        <UserShowHeader
          id={this.state.id}
          email={this.state.email}
          username={this.state.username}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
        <FormContainer
          id={this.state.id}
        />
      </div>
    )
  }
}

export default UserContainer;
