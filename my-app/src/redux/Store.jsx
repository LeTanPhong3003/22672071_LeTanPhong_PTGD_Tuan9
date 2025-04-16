import { createStore } from "redux";
import { calculatorReducer } from "./reducer";

// Tạo Redux store
export const store = createStore(calculatorReducer);