import React from "react";
import MenuItem from "../menultem/Menultem";

export default function MenuGrid({ data = [] }) {
  return (
    <div>
      <div className="MenuGrid-p">
        <p>Our Top Selling Products</p>
      </div>

      <div className="MenuGrid">
        {data.map((item) => (
          <MenuItem key={item.id} img={item.img} title={item.title} Price={item.price}/>
        ))}
      </div>
    </div>
  );
}
