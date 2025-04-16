import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Calculator = () => {
  // Lấy state từ Redux store
  const value = useSelector((state) => state.value);

  // Tạo dispatch để gửi action
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Calculator</h1>
      <h2 className="text-2xl font-semibold mb-6">Result: {value}</h2>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch({ type: "ADD", payload: 1 })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "SUBTRACT", payload: 1 })}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Calculator;