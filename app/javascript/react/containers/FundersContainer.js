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
        this.setState({
          funders: body.funders,
          favoriteFunderIds: body.favorite_funders
         });
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
            <h3 id="fundersHeader">Funders</h3>
            <form onSubmit={this.handleSearchSubmit}>
              <label id="funderFormLabel">
                Search by Category:
                <select onChange={this.handleCategoryChange} value={this.state.searchedCategory}>
                  <option value="select category">Select category</option>
                  <option value="education">education</option>
                  <option value="child health">child health</option>
                  <option value="health">health</option>
                  <option value="child welfare">child welfare</option>
                  <option value="food assistance">food assistance</option>
                  <option value="elder services">elder services</option>
                  <option value="transportation">transportation</option>
                  <option value="social justice">social justice</option>
                  <option value="housing">housing</option>
                  <option value="environmental">environmental</option>
                  <option value="youth development">youth development</option>
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
