import Cart from "../../modules/Cart/Cart";
import React from "react";

function Result({ searchResult }) {
  console.log(searchResult);

  return (
    <div className="result-container">
      {/* Hot Coffee */}

      <div className="result-section">
        
        {searchResult
          .filter(item => item.type === "hot")
          .slice(0, 3)
          .map(item => (
            <Cart {...item} key={item.id} />
            
          ))}
      </div>

      {/* Cold Coffee */}
      <div className="result-section">
        
        {searchResult
          .filter(item => item.type === "cold")
          .slice(0, 3)
          .map(item => (
            <Cart {...item} key={item.id} />
          ))}
      </div>
    </div>
  );
}

export default Result;
