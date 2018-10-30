import React, { Component } from 'react';
import FormContainer from './FormContainer'

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


  render(){
    return(
      <FormContainer
        addNewProgram={this.addNewProgram}
        userId={this.props.userId}
      />
    )
  }
}
export default ProgramContainer
