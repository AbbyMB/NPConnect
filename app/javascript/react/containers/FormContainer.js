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
                <option value="Education">education</option>
                <option value="Health">child health</option>
                <option value="Child Welfare">child welfare</option>
                <option value="Food Assistance">food assistance</option>
                <option value="Elder Services">elder services</option>
                <option value="Community Development">youth development</option>
                <option value="Transportation">transportation</option>
                <option value="Social Justice">social justice</option>
                <option value="Housing">housing</option>
                <option value="Environmental">environmental</option>
                <option value="Youth Development">youth development</option>
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
