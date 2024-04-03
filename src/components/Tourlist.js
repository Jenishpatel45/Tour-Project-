import React from 'react'

const mytourlist=[
    {img: '../images/tour-1.jpeg',
    date:'august 26th, 2020',
    title:'Tibet Adventure',
    details:'Lorem ipsum dolor sit amet, consectetur adipisicing vitae tempore voluptatum maxime reprehenderit eum',
     icon:'fas fa-map',
    days:'6 days',
    prices:'from $2100'
   }
]

const Tourlist = (props) => {
    // const {img,date,title,details,icon,days,prices}=props.mytourlist;
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

export default Tourlist
