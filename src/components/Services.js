import React from 'react'
import Title from './title'
import { servicecomponents } from './data'
const Services = () => {
  return (
    <>
      <section className="section services" id="services">
      <Title title="our"  subtitle="services" />
      <div className="section-center services-center">
        {
         servicecomponents.map((service)=>{
          const {id,icon,heading}=service;
          return (
            <article className="service" key={id}>
          <span className="service-icon">
            <i className= {icon}></i>
            </span>
          <div className="service-info">
            <h4 className="service-title">{heading}</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
     
          );
         }) 

        }
        
      </div>
    </section>
 

</>
  )
}

export default Services
