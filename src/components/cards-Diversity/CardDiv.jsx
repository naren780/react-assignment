import React from 'react'

const CardDiv = (props) => {
  return (
   
      <div id="container">
        <div className="main-div" id="insideccard1"  style={props.styles}>
           <div className="card" id="insidecard">
               <div className="smallDiv" style={props.colors} ><h1 style={{'color':'#fff','padding':'18%'}}>{props.number}</h1></div>
                   <div id="diversity">
                      <p id="inside-para" >  for this pattern of using as JS object with style=? Is this CSS in JS? – 
                       CodeFinity May 29, 2021 at 18:07 @CodeFinity it is simply passing inline styles as a JS object – Anatol
                       May 30, 2021 at 7:04
                       @Anatol how to add autocomplete in vscode as well? – 
                       Aviral
                       Sep 16, 2021 at 13:44</p>
                    </div>
                </div>             
           </div>
        </div>
    
      
   
  )
}

export default CardDiv
