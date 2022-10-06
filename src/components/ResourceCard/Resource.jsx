import React from 'react';
import './resource.css';



const Resource = () => {
  return (
    <div className="resource-container">
    <div className="img-div">
       <div className="heading">
       <h2 className="resource-heading">Resources</h2>
    </div>
        <img src="images/Resoure.jpg" alt="" style={{"width":"100%"}}/>
        
    </div>
    <div className="listitem">
       <ul type="none">
           <li><img className="ul-img" src="images/ResourceList.jpg"  width="10px"alt="" />Our Culture evolution</li>
           <li><img className="ul-img" src="images/ResourceList.jpg"width="10px" alt=""/>ENVU Cultural traits and behaviors</li>
           <li><img className="ul-img" src="images/ResourceList.jpg" width="10px"alt=""/>ENVU Transformation Agent Community</li>
           <li><img className="ul-img" src="images/ResourceList.jpg"  width="10px"alt=""/>Digital Kudos Cards</li>
       </ul>
    </div>
    </div>
  )
}

export default Resource;
