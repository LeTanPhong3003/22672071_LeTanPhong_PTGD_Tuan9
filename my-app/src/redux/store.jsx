import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import calculatorReducer from "./calculatorSlice";
import todoReducer from "./todoSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculator: calculatorReducer,
    todos: todoReducer,
    theme: themeReducer,
  },
});