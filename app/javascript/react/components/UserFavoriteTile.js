import React, { Component } from 'react'

class UserFavoriteTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      showStatus: "hide",
      clickedOpen: false
    }
  this.toggleFunderView = this.toggleFunderView.bind(this)
  }

  toggleFunderView(){
    if (this.state.clickedOpen === false) {
      this.setState({ clickedOpen: true, showStatus: "" })
    } else {
      this.setState({ clickedOpen: false, showStatus: "hide" })
    }
  }

  render() {

    return(
      <div>
        <h6 onClick={this.toggleFunderView}><i className="fas fa-search-dollar" id="icon"></i>{this.props.title}</h6>
          <p>#{this.props.category}</p>
          <p className={this.state.showStatus}>{this.props.description}</p>
          <a href={this.props.url} target="_blank" className={this.state.showStatus}>{this.props.url}</a>
      </div>
    )
  }
}

export default UserFavoriteTile;
