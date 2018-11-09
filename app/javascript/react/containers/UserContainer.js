import React, { Component } from 'react';
import FormContainer from './FormContainer'
import ProgramTile from '../components/ProgramTile'
import UserShowHeader from '../components/UserShowHeader'
import UserFavoriteTile from '../components/UserFavoriteTile'
import PartnershipTile from '../components/PartnershipTile'

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: [],
      favorites: [],
      partnerships: []
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
        this.setState({ programs: body.user.created_programs, favorites: body.user.favorites, partnerships: body.user.partnerships });
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
    let favorites = this.state.favorites.map(favorite => {
      return(
        <UserFavoriteTile
          key={favorite.funder.id}
          id={favorite.funder.id}
          title={favorite.funder.title}
          description={favorite.funder.description}
          url={favorite.funder.url}
          category={favorite.funder.category}
        />
      )
    })
    let partnerships = this.state.partnerships.map(partnership => {
      return(
        <PartnershipTile
          key={partnership.program.id}
          id={partnership.program.id}
          name={partnership.program.name}
          description={partnership.program.description}
          category={partnership.program.category}
        />
      )
    })
    return(
      <div className="row" id="profileContainer">
        <div className="small-12 columns" id="pageContainer">
          <UserShowHeader />
        </div>
        <div className="row">
          <div id="programContainer" className="small-5 columns">
            <h4 id="myPrograms">My Programs:</h4>
            {programs}
          </div>
          <div id="favoritesContainer" className="small-5 columns">
            <h4 id="myFavorites">My Funder Favorites:</h4>
            {favorites}
          </div>
        </div>
        <div className="row">
          <div className="small-5 columns">
            <FormContainer
              addNewProgram={this.addNewProgram}
            />
          </div>
          <div id="partnershipsContainer" className="small-5 columns">
            <h4>My Partnerships:</h4>
            {partnerships}
          </div>
        </div>
      </div>
    )
  }
};
export default UserContainer;
