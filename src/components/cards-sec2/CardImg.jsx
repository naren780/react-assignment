import React from 'react';



const CardImg = (props) => {
  return (
    <div>
        <img src={props.url} alt="" width="50px" height="50px" />
        <p>this cards section</p>
        <p style={{'fontWeight':'bold'}}>{props.para}</p>
        <span></span>
      
    </div>
  )
}

export default CardImg
