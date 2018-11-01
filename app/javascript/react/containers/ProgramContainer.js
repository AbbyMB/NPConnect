import React, { Component } from 'react';
import FormContainer from './FormContainer'
import ProgramTile from '../components/ProgramTile'

class ProgramContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: []
    }
  this.addNewProgram = this.addNewProgram.bind(this)
  }


  addNewProgram(formPayLoad){
    fetch(`/api/v1/programs`, {
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
      this.setState({ programs: allPrograms.concat(newProgram)})
    })
  }

  componentDidMount(){
    let userId = this.props.userId
    fetch(`/api/v1/users/${userId}/programs`)
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
        this.setState({ programs: body });
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
        <div id="programContainer" className="small-6 columns">
          <h4 id="myPrograms">My Programs:</h4>
          {programs}
          <FormContainer
            addNewProgram={this.addNewProgram}
            userId={this.props.userId}
          />
        </div>
      </div>
    )
  }
}
export default ProgramContainer
