import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ProgramIndexTile from '../components/ProgramIndexTile'

class ProgramsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      programs: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/programs`)
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
        this.setState({ programs: body.programs });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let allPrograms = this.state.programs.map(program => {
      return(
        <ProgramIndexTile
          key={program.id}
          id={program.id}
          name={program.name}
          description={program.description}
          category={program.category}
        />
      )
    })
    return(
      <div>
        <div className="row">
          <div className="small-8 small-centered columns" id="programPageContainer">
            <h3>Programs:</h3>
              <h5>Find Programs Near You:</h5>
                {allPrograms}
          </div>
        </div>
      </div>
    )
  }
};

export default ProgramsContainer;
