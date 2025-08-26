import React from "react";

function Card({ data }) {
  console.log(data);
  return (
    <div className="card">
      <img
        src={data.ProductImage}
        alt=""
        style={{
          width: "100%",
          height: "60%",
          borderRadius: "22px",
          marginBottom: "30px",
        }}
      />
      <b>{data.Category}</b>
      <h2>{data.Title}</h2>
      <p>{data.Price}$</p>
    </div>
  );
}

export default Card;
