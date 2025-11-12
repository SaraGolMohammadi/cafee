import React from 'react';

export default function ServiceItem({ img ,title}) {
  return (
    <div className='ServiceItem-div'>
     
      <div className='ServiceItem'>
        <img src={img} alt="service" />
      </div>

      <div className='service-item-title'>
      {title && <h3>{title}</h3>}
      </div>
    </div>
  )
}
