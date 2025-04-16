import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Counter from "./component/Counter";
import Calculator from "./component/Calculator";
import CounterBasic from "./component/CounterBasic";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Calculator />
        <hr />
        <CounterBasic />
        <hr />
        <Counter />
        <hr />

      </div>
    </Provider>
  );
};

export default App;