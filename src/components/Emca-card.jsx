import React from 'react';
import './emca.css';
// import cstimg from '../Images/Sales.png';


const EmcaCard = (props) => {

  return (
    
           <div className="card  card-emca" >
                <div className="card-body body-emca">
                     <h3>{props.text}</h3>
                     <h1 id="emca-h1">{props.heading}</h1>
                     <small>{props.matter}</small>
                     <img src={props.imgUrl} className="card-img" alt="..."/>
                </div>
            </div>
      
  )
}

export default EmcaCard;
