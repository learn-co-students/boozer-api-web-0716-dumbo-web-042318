import React from 'react';

class CreateCocktail extends React.Component {

  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      instructions: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, description, instructions} = this.state;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        instructions
      })
    }
    fetch('http://localhost:3001/api/v1/cocktails', options)
      .then(resp => resp.json())
      .then(newDrink => this.props.addNewDrink(newDrink))

    this.setState({
      name: '',
      description: '',
      instructions: ''
    })
  }

  render() {
    const {name, description, instructions} = this.state
    return(
      <div className="col-sm-5" onSubmit={this.handleSubmit}>
        <h3>Create Cocktail</h3>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Name" name="name" value={name} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows="3" name="description" value={description} onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group">
            <label>Instructions</label>
            <textarea className="form-control" rows="3" name="instructions" value={instructions} onChange={this.handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateCocktail;
