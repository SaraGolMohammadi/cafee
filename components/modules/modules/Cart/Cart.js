import React from 'react'
import Link from "next/link";

export default function Cart({ id, img, price, title}) {
  return (
    <div className=" Cart row align-items-center mb-5">
      {/* ستون تصویر و قیمت */}
      <div>
        <img className="w-100 rounded-circle mb-3 mb-sm-0" src={img} alt={title} />
       
      </div>

      {/* ستون عنوان و توضیحات */}
      <div  className="Cart-div">
        <h4>{title}</h4>
        <h5 className="menu-price">${price}</h5>
      </div>
    </div>
  )
}
