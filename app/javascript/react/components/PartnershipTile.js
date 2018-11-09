import React, { Component } from 'react'

class PartnershipTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedOpen: false,
      iconClass: "fas fa-angle-double-down",
      showStatus: "hide"
    }
  this.toggleProjectTile = this.toggleProjectTile.bind(this)
  }

  toggleProjectTile() {
    if (this.state.clickedOpen === false) {
      this.setState({ clickedOpen: true, iconClass: "fas fa-angle-double-up", showStatus: "" })
    } else {
      this.setState({ clickedOpen: false, iconClass: "fas fa-angle-double-down", showStatus: "hide" })
    }
  }


  render(){

    return(
      <div>
          <h6 onClick={this.toggleProjectTile}><i id="icon" className={this.state.iconClass}></i>{this.props.name}</h6>
          <p>#{this.props.category}</p>
          <p className={this.state.showStatus}>Description: {this.props.description}</p>
      </div>
    )
  }
}

export default PartnershipTile;
