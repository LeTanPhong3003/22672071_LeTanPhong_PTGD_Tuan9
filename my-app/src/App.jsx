import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import CounterRedux from "./component/CounterRedux";
import Calculator from "./component/Calculator";
import CounterBasic from "./component/CounterBasic";
import TodoListBasic from "./component/TodoListBasic";
import TodoListRedux from "./component/TodoListRedux";
import ToggleThemeBasic from "./component/ToggleThemeBasic";
import ToggleThemeRedux from "./component/ToggleThemeRedux";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Calculator />
        <hr />
        <CounterBasic />
        <hr />
        <CounterRedux />
        <hr />
        <TodoListBasic />
        <hr />
        <TodoListRedux />
        <hr />
        <ToggleThemeBasic />
        <hr />
        <ToggleThemeRedux />
      </div>
    </Provider>
  );
};

export default App;