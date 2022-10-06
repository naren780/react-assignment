import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
// import { Container } from '@mui/system';


const EmecUser2 = () => {
  return (
   
      <Container>
    
      <Grid container spacing={4} style={{'backgroundImage':' linear-gradient(to bottom, red, blue)'}}>
        <Grid item xs={12} md={5}lg={5}>
        <img src="Images/userpic2.png" className='userpic2-img' alt="" style={{'width':'100%','height':'107%'}} />

        </Grid>
        <Grid item xs={12} md={7}lg={7}>
        <div className='emec-para' >
    
          <p>Our Area of Commercial Operations is dedicated to...</p>
            <ul>
                <li>Securing our baseline growth on the existing portfolio and future innovation </li>
                <li>Preparing the future with disruotive initiatives and ensure future growth for success stories by daring to explore</li>
                <li>Accelerating our commercial digital tranformation and bulid new eco-system to meet our customers' needs.</li>
                <li>Expanding our geographical footprint by driving our market expansion</li>
                <li>Fostering our entrepreneurial mindset to strengthen the partnership and trust with our Customers</li>
                <li>Empowering people tio leverage their talents and leadership in our environment (ONe Team-One Dream</li>
            </ul>
            </div>

        </Grid>
      </Grid>
      </Container>
    
 
    
  )
}

export default EmecUser2
