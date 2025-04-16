// App.js
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/calculatorSlice";
import Calculator from "./component/Calculator";

const App = () => {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
};

export default App;