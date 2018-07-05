import React, { Component } from 'react';
import './App.css';
import DrinkContainer from './DrinkContainer'
import DrinksList from './DrinksList'
import CreateCocktail from './CreateCocktail'




class App extends Component {

  constructor() {
    super();

    this.state = {
      currentDrink: '',
      drinkList: []
    }

  }

  componentDidMount() {
    this.setInitialDrink()
    this.fetchDrinkList()
  }

  setInitialDrink() {
    fetch("/api/v1/cocktails/1")
      .then(resp => resp.json())
      .then(firstDrink => {
        this.setState({
          currentDrink: firstDrink
        })
      })
  }

  fetchDrinkList() {
    fetch("/api/v1/cocktails")
      .then(resp => resp.json())
      .then(drinksList => {
        this.setState({
          drinkList: drinksList
        })
      })
  }

  handleDrinkItemClick = (drink) => {
    fetch(`/api/v1/cocktails/${drink.id}`)
      .then(resp => resp.json())
      .then(drink => {
        this.setState({
          currentDrink: drink
        })
      })
  }

  addNewDrink = (newDrink) => {
    this.setState({drinkList: [...this.state.drinkList, newDrink]})
  }



  render() {
    return (
      <div className="App row">
        <DrinksList
          handleDrinkItemClick={this.handleDrinkItemClick}
          drinks={this.state.drinkList}
        />
        <DrinkContainer drink={this.state.currentDrink} />
        <CreateCocktail addNewDrink={this.addNewDrink}/>
      </div>
    );
  }
}

export default App;
