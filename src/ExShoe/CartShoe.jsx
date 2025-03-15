import React from "react";

export default function CartShoe(props) {
  let { cart } = props;
  let renderCart = () => {
    return cart.map((shoe, index) => {
      return (
        <tr key={index}>
          <td>{shoe.name}</td>
          <td>{shoe.price} </td>
          <td>
            <img className="w-20" src={shoe.image} alt="" />
          </td>
          <td>{shoe.total}</td>
          <td>
            <button
              onClick={() => {
                props.handleDelete(shoe.id);
              }}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="flex-grow  b ml-5">
      <table className="w-full border-2 border-black text-lg">
        {/* flex-grow: bên đó được chừa bao nhiêu thì lấy bấy nhiêu */}
        <thead className="bg-gray-400">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderCart()}</tbody>
        {cart.length == 0 && (
          <p className="text-red-500 text-sm">No items in cart</p>
        )}
      </table>
    </div>
  );
}
