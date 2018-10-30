import React, { Component } from 'react';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: 'select category'
    }
  this.handleNameChange = this.handleNameChange.bind(this)
  this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
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
  handleCategoryChange(event){
    this.setState({ category: event.target.value})
  }
  handleClearForm(){
    this.setState({
      name: '',
      description: '',
      category: 'select category'
    })
  }
  handleSubmit(event){
    event.preventDefault();
      let formPayLoad = {
        name: this.state.name,
        description: this.state.description,
        category: this.state.category,
        user_id: this.props.userId
      }
      this.props.addNewProgram(formPayLoad)
      this.handleClearForm()
  }

  render(){
    return(
      <div className="row">
        <div className="small-6">
          <form onSubmit={this.handleSubmit}>
            <h4>Add A Program</h4>
            <label>
              Program Name:
              <input
                type="text"
                onChange={this.handleNameChange}
                value={this.state.name}
                 />
            </label>
            <label>
              Program Description:
              <input
                type="text"
                onChange={this.handleDescriptionChange}
                value={this.state.description}
                 />
            </label>
            <label>
              Program Focus:
              <select onChange={this.handleCategoryChange} value={this.state.category}>
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
