import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../redux/cartSlice";

const ShoppingCartRedux = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate total quantity and total price
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart (Redux)</h1>

      {/* Buttons to add products */}
      <div className="mb-4">
        <button
          onClick={() => dispatch(addItem({ id: 1, name: "Product A", price: 100 }))}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
        >
          Add Product A
        </button>
        <button
          onClick={() => dispatch(addItem({ id: 2, name: "Product B", price: 200 }))}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Product B
        </button>
      </div>

      {/* Cart Items List */}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span>
              {item.name} - ${item.price} x {item.quantity}
            </span>
            <div>
              <button
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <button
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                className="px-2 py-1 bg-gray-300 rounded ml-2"
              >
                +
              </button>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="px-2 py-1 bg-red-500 text-white rounded ml-2"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Total Quantity and Price */}
      <div className="mt-4">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default ShoppingCartRedux;