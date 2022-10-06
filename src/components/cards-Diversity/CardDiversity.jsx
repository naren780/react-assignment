import React from 'react';
import CardDiv from './CardDiv';
// import {Grid} from "@material-ui/core/Grid"
import Grid from '@mui/material/Grid';
import './diversity.css'

const CardDiversity = () => {
 
  
  return (
    <div>
    <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
           <CardDiv number="01"
                    colors={{"backgroundColor":"red"}}
                    styles= {{"borderTop": "20px solid red" }}
           />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CardDiv number="02"
           colors={{"backgroundColor":" rgb(134, 71, 163)"}}
           styles={{"borderTop": "20px solid  rgb(134, 71, 163)" }}/>
        </Grid>
        <Grid item md={12} lg={12} >
          <CardDiv number="03"
           colors={{"backgroundColor":"blue"}}
           styles= {{"borderTop": "20px solid blue" }}/>
        </Grid>
      
      </Grid>  
         
        
      
    </div>
  )
}

export default CardDiversity
