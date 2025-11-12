import React from "react";
import Cart from "../../modules/Cart/Cart";

export default function Pricing({data}) {
  
  return (
    <div>
      <div>
        <div>
          {data
            .filter((item) => item.type === "hot")
            .slice(0, 2)
            .map((item) => (
              <Cart {...item} key={item.id} />
            ))}
        </div>

        <div className="col-lg-6">
          <h1 className="mb-5">Cold Coffee</h1>

          {data
            .filter((item) => item.type === "cold")
            .slice(0, 3)
            .map((item) => (
              <Cart {...item} key={item.id} />
            ))}
        </div>
      </div>
    </div>
  );
}
