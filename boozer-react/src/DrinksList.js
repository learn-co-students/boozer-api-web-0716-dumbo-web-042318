import React from 'react';
import DrinksListItem from './DrinksListItem';

const DrinksList = (props) => {

  const drinks = props.drinks.map((drink) => {
    return <DrinksListItem key={drink.id} drink={drink} name={drink.name} handleClick={props.handleDrinkItemClick}/>
  })

  return(
    <div className='col-sm-2 drink-list'>
      <ul>
        {drinks}
      </ul>
    </div>
  )
}

export default DrinksList;
