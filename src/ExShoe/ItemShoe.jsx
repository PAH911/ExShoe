import React from "react";

export default function ItemShoe({ dataShoe, handleChangeShoe, handleAdd }) {
  return (
    <div className=" p-2 border-2 border-black rounded">
      <img src={dataShoe.image} className="w-2/3 mx-auto" alt="" />
      <h2 className="text-xl font-bold">{dataShoe.name}</h2>
      <h3 className="font-bold">
        {dataShoe.price} ${/* <p>{dataShoe.shortDescription}</p> */}
        <br />
        <button
          onClick={() => {
            handleChangeShoe(dataShoe);
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded inline-block"
        >
          View detail
        </button>
        <br />
        <button
          onClick={() => {
            handleAdd(dataShoe);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded inl"
        >
          Add to cart
        </button>
      </h3>
    </div>
  );
}
