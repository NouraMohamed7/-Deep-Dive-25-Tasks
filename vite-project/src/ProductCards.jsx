import React from "react";
import Card from "./Card";
import { data } from "./data.js";

function ProductCards() {
  return (
    <div className="container-card">
      {data.map((val, index) => (
        <div key={index}>
          <Card data={val} />
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
