import React from 'react'
import './Accorid.css'

const Accordion = () => {
  return (
    <div className='container'>
    
         <div className="accoedion" id="naren">
              <div className="card card-accordion" >
                  <div className="card-header" >
                      <a href="#value1" data-toggle="collapse">
                          <p>Reword for Impact Growth<i className="fa fa-caret-down pull-right fa-4px" ></i></p>
                      </a>
                  </div>
                  <div id="value1" className="collapse" data-parent="#naren">
                     <div className="card-body" style={{'borderRadius':'10px'}} id="body-accorideon"> 
                         <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sminima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sin et id nulla tenetur. Suscipit aut voluptate</p>
                     </div>
                  </div>
                </div>
                {/* second  */}
                <div className="card card-accordion" >
                  <div className="card-header" id="second-header" >
                      <a href="#value2" data-toggle="collapse">
                          <p>Talent Sustainability<i className="fa fa-caret-down pull-right fa-4px" ></i></p>
                      </a>
                  </div>
                  <div id="value2" className="collapse" data-parent="#naren">
                     <div className="card-body" style={{'borderRadius':'10px'}} id="body-accorideon"> 
                         <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sminima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sin et id nulla tenetur. Suscipit aut voluptate</p>
                     </div>
                  </div>
                </div>
                {/* third */}
                <div className="card card-accordion" >
                  <div className="card-header" id="third-header">
                      <a href="#value3" data-toggle="collapse">
                          <p>Culture Supportive<i className="fa fa-caret-down pull-right fa-4px" ></i></p>
                          
                      </a>
                  </div>
                  <div id="value3" className="collapse" data-parent="#naren">
                     <div className="card-body" style={{'borderRadius':'10px'}}id="body-accorideon"> 
                         <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sminima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sin et id nulla tenetur. Suscipit aut voluptate</p>
                     </div>
                  </div>
                </div>
        
        </div>
    </div>
  )
}

export default Accordion;
