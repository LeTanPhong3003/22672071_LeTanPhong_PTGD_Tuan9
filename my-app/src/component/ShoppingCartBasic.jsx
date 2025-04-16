import React, { useState } from "react";

const ShoppingCartBasic = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart (Basic)</h1>
      <button
        onClick={() => addItem({ id: 1, name: "Product A", price: 100 })}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
      >
        Add Product A
      </button>
      <button
        onClick={() => addItem({ id: 2, name: "Product B", price: 200 })}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4 ml-2"
      >
        Add Product B
      </button>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span>
              {item.name} - ${item.price} x {item.quantity}
            </span>
            <div>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-300 rounded ml-2"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="px-2 py-1 bg-red-500 text-white rounded ml-2"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default ShoppingCartBasic;