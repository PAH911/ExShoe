import React from "react";

export default function DetailShoe({ detailShoe }) {
  return (
    <div className="flex justify-center items-center">
      {<img className="w-96" src={detailShoe.image} alt="" />}
      <div className="Detail__display font-bold mb-5">
        <h2>Name: {detailShoe.name}</h2>
        <h3>Price: {detailShoe.price} $</h3>
        <h3>Description: {detailShoe.description}</h3>
        <h3>Quantity: {detailShoe.quantity}</h3>
      </div>
    </div>
  );
}
