import React, { Component } from 'react';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      address:'',
      category: 'select category'
    }
  this.handleNameChange = this.handleNameChange.bind(this)
  this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  this.handleAddressChange = this.handleAddressChange.bind(this)
  this.handleCategoryChange = this.handleCategoryChange.bind(this)
  this.handleClearForm = this.handleClearForm.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event){
    this.setState({ name: event.target.value })
  }
  handleDescriptionChange(event){
    this.setState({ description: event.target.value})
  }
  handleAddressChange(event){
    this.setState({ address: event.target.value})
  }
  handleCategoryChange(event){
    this.setState({ category: event.target.value})
  }
  handleClearForm(){
    this.setState({
      name: '',
      description: '',
      address: '',
      category: 'select category'
    })
  }
  handleSubmit(event){
    event.preventDefault();
      let formPayLoad = {
        name: this.state.name,
        description: this.state.description,
        address: this.state.address,
        category: this.state.category
      }
      this.props.addNewProgram(formPayLoad)
      this.handleClearForm()
  }

  render(){
    return(
      <div className="row">
        <div className="small-10" id="addProgram">
          <form onSubmit={this.handleSubmit}>
            <h4>Add A Program</h4>
            <label className="addProgram">
              Program Name:
              <input
                className="addProgram"
                type="text"
                onChange={this.handleNameChange}
                value={this.state.name}
                 />
            </label>
            <label className="addProgram">
              Program Description:
              <input
                className="addProgram"
                type="text"
                onChange={this.handleDescriptionChange}
                value={this.state.description}
                 />
            </label>
            <label className="addProgram">
              Program Address:
              <input
                className="addProgram"
                type="text"
                onChange={this.handleAddressChange}
                value={this.state.address}
                 />
            </label>
            <label className="addProgram">
              Program Focus:
              <select className="addProgram" onChange={this.handleCategoryChange} value={this.state.category}>
                <option value="select category">Select category</option>
                <option value="education">education</option>
                <option value="child health">child health</option>
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
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default FormContainer;
