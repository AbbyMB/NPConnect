import React, { Component } from 'react';
import FormContainer from './FormContainer'
import ProgramTile from '../components/ProgramTile'
import UserShowHeader from '../components/UserShowHeader'

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: []
    }
  this.addNewProgram = this.addNewProgram.bind(this)
  }

  componentDidMount(){
    let userId = window.currentUser.id
    fetch(`/api/v1/users/${userId}`)
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
        this.setState({ programs: body.user.programs });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addNewProgram(formPayLoad){
    let userId = window.currentUser.id
    fetch(`/api/v1/users/${userId}/programs`, {
      method: 'POST',
      body: JSON.stringify(formPayLoad),
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
    .then(newProgram => {
      let allPrograms = this.state.programs
      let addedProgram = newProgram.program
      this.setState({ programs: allPrograms.concat(addedProgram)})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let programs = this.state.programs.map(program => {
      return(
        <ProgramTile
          key={program.id}
          id={program.id}
          name={program.name}
          description={program.description}
          category={program.category}
        />
      )
    })
    return(
      <div className="row">
        <UserShowHeader />
        <div id="programContainer" className="small-6 columns">
          <h4 id="myPrograms">My Programs:</h4>
          {programs}
          <FormContainer
            addNewProgram={this.addNewProgram}
          />
        </div>
      </div>
    )
  }
}
export default UserContainer;
