import React, { Component } from 'react'

class FunderTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: props.isFavorite,
      showStatus: "hide",
      clickedOpen: false
    }
    this.createFavorite = this.createFavorite.bind(this)
    this.toggleFunderView = this.toggleFunderView.bind(this)
  }

  toggleFunderView(){
    if (this.state.clickedOpen === false) {
      this.setState({ clickedOpen: true, showStatus: "" })
    } else {
      this.setState({ clickedOpen: false, showStatus: "hide" })
    }
  }

  createFavorite(){
    let userId = window.currentUser.id
    let payLoad = {
      funder_id: this.props.id
    }
    fetch(`/api/v1/users/${userId}/favorites`, {
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
      if (body.favorited === true){
        this.setState({ favorite: true })
      } else {
      this.setState({ favorite: false })
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let heartIcon;
    if (this.state.favorite){
      heartIcon = "fas fa-heart"
    } else {
      heartIcon = "far fa-heart"
    }

    return(
      <div>
          <li onClick={this.toggleFunderView}>{this.props.title}</li>
          <p>#{this.props.category}</p>
          <i id="favoriteHeart" className={heartIcon} onClick={this.createFavorite}></i>
          <p className={this.state.showStatus}>{this.props.description}</p>
          <a href={this.props.url} className={this.state.showStatus} target="_blank">{this.props.url}</a>
      </div>
    )
  }
}


export default FunderTile;
