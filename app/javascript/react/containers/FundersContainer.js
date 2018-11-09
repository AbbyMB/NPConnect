import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import FunderTile from '../components/FunderTile'

class FundersContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      funders: [],
      searchedFunders: [],
      searchedCategory: 'select category',
      favoriteFunderIds: []
    }
  this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  this.handleCategoryChange = this.handleCategoryChange.bind(this)
  this.handleReset = this.handleReset.bind(this)
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

    fetch(`/api/v1/current_user/current_user_favorites`)
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
        this.setState({ favoriteFunderIds: body.favorite_funders });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleCategoryChange(event){
    this.setState({ searchedCategory: event.target.value })
  }

  handleSearchSubmit(event){
    event.preventDefault()
    let searchedCategory = this.state.searchedCategory
    let funders = this.state.funders
    let searchedFunders = funders.filter((funder) => {
      if (funder.category === searchedCategory){
        return funder
      }
    });
    this.setState({ funders: searchedFunders })
  }
  handleReset(event){
    this.setState({ searchedFunders: [], searchedCategory: 'select category' })
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
      let isFavorite = this.state.favoriteFunderIds.includes(funder.id)
      return(
        <FunderTile
          isFavorite={isFavorite}
          key={funder.id}
          id={funder.id}
          title={funder.title}
          description={funder.description}
          url={funder.url}
          category={funder.category}
        />
      )
    })

    return(
      <div>
        <div className="row">
          <div className="small-8 small-centered columns" id="funderPageContainer">
            <h3>Funders:</h3>
            <h5>Search Funders By Category</h5>
            <form onSubmit={this.handleSearchSubmit}>
              <label>
                Search by Category:
                <select onChange={this.handleCategoryChange} value={this.state.searchedCategory}>
                  <option value="select category">Select category</option>
                  <option value="education">Education</option>
                  <option value="child health">Child Health</option>
                  <option value="child welfare">Child Welfare</option>
                  <option value="food assistance">Food Assistance</option>
                  <option value="elder services">Elder Services</option>
                  <option value="transportation">Transportation</option>
                  <option value="social justice">Social Justice</option>
                  <option value="housing">Housing</option>
                  <option value="environmental">Environmental</option>
                  <option value="youth development">Youth Development</option>
                </select>
              </label>
              <button className="button">
                Search
              </button>
              <button onClick={this.handleReset} className="button">
                Reset
              </button>
            </form>
            {funders}
          </div>
        </div>
      </div>
    )
  }
}

export default FundersContainer;
