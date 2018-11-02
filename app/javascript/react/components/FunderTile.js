import React, { Component } from 'react'

class FunderTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: false,
      iconClass: "far fa-heart",
      showStatus: "hide",
      clickedOpen: false
    }
    this.toggleFavorite = this.toggleFavorite.bind(this)
    this.toggleFunderView = this.toggleFunderView.bind(this)
  }
  toggleFavorite(){
    if (this.state.favorite === false) {
      this.setState({ favorite: true, iconClass: "fas fa-heart" })
    } else {
      this.setState({ favorite: false, iconClass: "far fa-heart"})
    }
  }

  toggleFunderView(){
    if (this.state.clickedOpen === false) {
      this.setState({ clickedOpen: true, showStatus: "" })
    } else {
      this.setState({ clickedOpen: false, showStatus: "hide" })
    }
  }

  render(){

    return(
      <div>
          <li onClick={this.toggleFunderView}>{this.props.title}</li>
          <p>#{this.props.category}</p>
          <i id="favoriteHeart" className={this.state.iconClass} onClick={this.toggleFavorite}></i>
          <p className={this.state.showStatus}>{this.props.description}</p>
          <a href={this.props.url} className={this.state.showStatus} target="_blank">{this.props.url}</a>
      </div>
    )
  }
}


export default FunderTile;
