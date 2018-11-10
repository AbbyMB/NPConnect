import React, { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ProgramIndexTile from '../components/ProgramIndexTile'
import GoogleMapReact from 'google-map-react';

class ProgramsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      programs: [],
      searchedAddress: '',
      mileage: 0,
      searchedPrograms: [],
      partnershipProgramIds: []
    }
  this.handleAddressSearch = this.handleAddressSearch.bind(this)
  this.handleMileageChange = this.handleMileageChange.bind(this)
  this.handleClearForm = this.handleClearForm.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.searchPrograms = this.searchPrograms.bind(this)
  this.handleReset = this.handleReset.bind(this)
  }

  handleAddressSearch(event){
    this.setState({ searchedAddress: event.target.value })
  }
  handleMileageChange(event){
    this.setState({ mileage: event.target.value })
  }
  handleClearForm(){
    this.setState({
      searchedAddress: '',
      mileage: ''
    })
  }

  searchPrograms(formPayLoad){
    fetch(`/api/v1/searchs?address=${formPayLoad.searchedAddress}&mileage=${formPayLoad.mileage}`)
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

  handleReset(event){
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

  handleSubmit(event){
    event.preventDefault();
    let mileageNumber = parseInt(this.state.mileage)
    let formPayLoad = {
      searchedAddress: this.state.searchedAddress,
      mileage: mileageNumber
    }
    this.searchPrograms(formPayLoad)
    this.handleClearForm()
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
        this.setState({
          programs: body.programs,
          partnershipProgramIds: body.partnerships
       });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render(){
    let allPrograms = this.state.programs.map(program => {
      let isPartnership = this.state.partnershipProgramIds.includes(program.id)
      return(
        <ProgramIndexTile
          isPartnership={isPartnership}
          key={program.id}
          id={program.id}
          name={program.name}
          description={program.description}
          category={program.category}
        />
      )
    })
    return(
    <div id="programIndexContainer">
      <div className="row">
        <div className="small-8 small-centered columns">
          <h3 id="programsHeader">Programs:</h3>
          <h5 id="findPrograms">Find Programs Near You:</h5>
            <form onSubmit={this.handleSubmit}>
              <p>Enter Address</p>
              <label>
                <input
                  type="text"
                  onChange={this.handleAddressSearch}
                  value={this.state.searchedAddress}
                />
                <select onChange={this.handleMileageChange} value={this.state.mileage}>
                  <option value="search programs within">Search Programs Within</option>
                  <option value="5">5 Miles</option>
                  <option value="10">10 Miles</option>
                  <option value="25">25 Miles</option>
                  <option value="50">50 Miles</option>
                </select>
              </label>
              <button className="button">
                Search
              </button>
            </form>
            <button id="reset" onClick={this.handleReset} className="button">
            Reset
            </button>
            <div id="allPrograms">
              {allPrograms}
            </div>
        </div>
      </div>
    </div>
    )
  }
};

export default ProgramsContainer;
