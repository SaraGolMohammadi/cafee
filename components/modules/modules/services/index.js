import React from 'react';
import ServiceItem from '@/components/modules/modules/ServiceItem/ServiceItem';


export default function ServicesGrid({ services }) {
  return (
    <>
    <div className='ServicesGrid-p'> <p>Blending culture, coffee & top notch services</p></div>
       <div className="ServicesGrid">
      {services.map(service => (
        <ServiceItem key={service.id} img={service.img} title={service.title} />
      ))}
    </div>
    </>
       )  }
