import React from 'react';

const CardsText = (props) => {
  return (
    <div>
      <h1 style={{'color':'rgb(134, 71, 163)'}}>{props.number}</h1>
      <p>this cards section</p>
      <p style={{'fontWeight':'bold'}}>{props.para}</p>
     
    </div>
  )
}

export default CardsText
