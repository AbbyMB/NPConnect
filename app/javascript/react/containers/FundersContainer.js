import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import FunderTile from '../components/FunderTile'

class FundersContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      funders: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/funders`)
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
        this.setState({ funders: body.funders });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    let funders = this.state.funders.map(funder => {
      return(
        <FunderTile
          key={funder.id}
          title={funder.title}
          description={funder.description}
          url={funder.url}
          category={funder.category}
        />
      )
    })
    return(
      <div>
        <div className="row" id="funderText">
          <div className="small-8 small-centered columns">
            <h3>Funders:</h3>
            {funders}
          </div>
        </div>
      </div>
    )
  }
}

export default FundersContainer;
