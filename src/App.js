import Accordion from './components/Accordion';
import EmcaCard from './components/Emca-card';
import EmcaContent from './EmcaContent';
import CardDiversity from './components/cards-Diversity/CardDiversity';
import Correner from './components/Correner/Correner';
import CardSec2 from './components/cards-sec2/CardSec2';
import UserDetalis from './components/userdetails/UserDetalis';
import CardSec1 from './components/Cardsec1/CardSec1';
import Arc from './components/arc-section/Arc';
import EmecUser1 from './components/Emes-section/EmecUser1';
import EmecUser2 from './components/Emes-section/EmecUser2';

import Resource from './components/ResourceCard/Resource';
// import AccordionContent from './components/Accordin-content';



function App() {
  return (
  <div>
      <Accordion/>
      <div className="emcaCard-div">
      {EmcaContent.map((value)=>{
        return<EmcaCard text={value.text}
                         heading={value.heading}
                         matter={value.matter}
                         imgUrl={value.img}/>
      })}
      </div>
      <CardDiversity/>
      <Arc/>
    
      <Correner/>
      <CardSec2/>
      <UserDetalis/>
      <CardSec1/>
      
      <EmecUser2/>
      <EmecUser1/>
     
      <Resource/>
 


    </div>
  )
}
export default App;
