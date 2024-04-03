import React from 'react'
import  Title from './title'
import Tour1 from '../images/tour-1.jpeg';
import Tour2 from '../images/tour-2.jpeg';
import Tour3 from '../images/tour-3.jpeg';
import Tour4 from '../images/tour-4.jpeg';
//import Tourlist from './Tourlist';

const mytourlist=[  
  {
   img: Tour1,
  date:'august 26th, 2020',
  title:'Tibet Adventure',
  details:'Lorem ipsum dolor sit amet, consectetur adipisicing vitae tempore voluptatum maxime reprehenderit eum',
   icon:'fas fa-map',
  days:'6 days',
  prices:'from $2100'
 },
 {
  img: Tour2,
 date:'august 26th, 2020',
 title:'Tibet Adventure',
 details:'Lorem ipsum dolor sit amet, consectetur adipisicing vitae tempore voluptatum maxime reprehenderit eum',
  icon:'fas fa-map',
 days:'6 days',
 prices:'from $2100'
},
{
  img: Tour3,
 date:'august 26th, 2020',
 title:'Tibet Adventure',
 details:'Lorem ipsum dolor sit amet, consectetur adipisicing vitae tempore voluptatum maxime reprehenderit eum',
  icon:'fas fa-map',
 days:'6 days',
 prices:'from $2100'
},
{
  img: Tour4,
 date:'august 26th, 2020',
 title:'Tibet Adventure',
 details:'Lorem ipsum dolor sit amet, consectetur adipisicing vitae tempore voluptatum maxime reprehenderit eum',
  icon:'fas fa-map',
 days:'6 days',
 prices:'from $2100'
}
]


const Tours = () => {
  return (
    <>
       <section class="section" id="tours">
        <Title title="Feautred" subtitle=" Tours"/>
        <div class="section-center featured-center">
          {
          mytourlist.map((tours)=>{
            const {img,date,title,details,icon,days,prices}=tours;
            return <Tourlist  img={img} date={date} title={title} details={details} icon={icon} days={days} prices={prices} />;
          })}
             
          
          
       
       
      </div>
    </section>
    </>
  )
}

const Tourlist = (props) => {
  // 
return (
  <>
  <article class="tour-card">
  <div class="tour-img-container">
    <img src={props.img} class="tour-img" alt="" />
    <p class="tour-date">{props.date}</p>
  </div>
  <div class="tour-info">
    <div class="tour-title">
      <h4>{props.title}</h4>
    </div>
    <p>{props.details}</p>
    <div class="tour-footer">
      <p>
        <span><i class={props.icon}></i></span> china
      </p>
      <p>{props.days}</p>
      <p>{props.prices}</p>
    </div>
  </div>
</article>
</>
)
}


export default Tours
