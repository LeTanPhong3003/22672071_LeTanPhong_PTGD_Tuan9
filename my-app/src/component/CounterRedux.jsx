import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

const CounterRedux = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Counter (Redux)</h1>
      <div className="text-2xl font-semibold text-blue-600 mb-6">
        Current Count: {count}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Tăng
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Giảm
        </button>
      </div>
    </div>
  );
};

export default CounterRedux;