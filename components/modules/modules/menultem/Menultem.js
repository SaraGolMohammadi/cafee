import React from 'react'

export default function Menultem({img, title ,Price}) {
  return (
    <div>
    <div className='Menultem-div'>
     
     <div className='Menultem'>
       <img src={img} alt="service" />
     </div>

     <div className='Menultem-title'>
     {title && <h3>{title}</h3>}
    
     </div>

     <div className='Menultem-h6'>
       <img src="./img/icons8-shop-32.png" alt="" />
       <h6>${Price}</h6>
     </div>

       </div>
    </div>
  )
}
