import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

class ProgramIndexTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      partnership: props.isPartnership,
      clickedOpen: false,
      iconClass: "fas fa-angle-double-down",
      showStatus: "hide"
    }
  this.toggleProjectTile = this.toggleProjectTile.bind(this)
  this.createPartnership = this.createPartnership.bind(this)
  }

  toggleProjectTile() {
    if (this.state.clickedOpen === false) {
      this.setState({ clickedOpen: true, iconClass: "fas fa-angle-double-up", showStatus: "" })
    } else {
      this.setState({ clickedOpen: false, iconClass: "fas fa-angle-double-down", showStatus: "hide" })
    }
  }

  createPartnership(){
    let userId = window.currentUser.id
    let payLoad = {
      program_id: this.props.id
    }
    fetch(`/api/v1/users/${userId}/partnerships`, {
      method: 'POST',
      body: JSON.stringify(payLoad),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
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
      if (body.partnership === true){
        this.setState({ partnership: true })
      } else {
      this.setState({ partnership: false })
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let handshakeIcon;
    if (this.state.partnership){
      handshakeIcon = "fas fa-handshake fa-lg"
    } else {
      handshakeIcon = "far fa-handshake fa-lg"
    }
    return(
      <div id="programIndexTile">
        <h6 onClick={this.toggleProjectTile}><i id="icon" className={this.state.iconClass}></i>{this.props.name}</h6>
        <i className={handshakeIcon} onClick={this.createPartnership}></i>
        <p>#{this.props.category}</p>
        <p className={this.state.showStatus}>Description: {this.props.description}</p>
      </div>
    )
  }
}
export default ProgramIndexTile;
