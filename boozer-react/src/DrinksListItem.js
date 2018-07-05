import React from 'react';

const DrinksListItem = (props) => {
  return(
    <li onClick={() => {props.handleClick(props.drink)}}>
      {props.name}
    </li>
  )
}

export default DrinksListItem;
