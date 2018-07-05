import React from 'react';


const DrinkContainer = ({drink: {name, description, instructions, proportions}}) => {

  return(
    <div className='col-sm-5'>
      <h1>{name}</h1>
      <div>
        <h6>{description}</h6>
        <p>{instructions}</p>
      </div>
      <div>
        <h3>INGREDIENTS</h3>
        <ul>
          {/* {proportions.map(proportion => {
            return <li key={proportion.id}>{proportion.amount} {proportion.ingredient_name}</li>
          })} */}
        </ul>
      </div>
    </div>
  )
}

export default DrinkContainer;
