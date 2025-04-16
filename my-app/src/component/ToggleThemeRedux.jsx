import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const ToggleThemeRedux = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className={theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"} style={{ minHeight: "100vh" }}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Toggle Theme (Redux)</h1>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
};

export default ToggleThemeRedux;