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
import ShoppingCartBasic from "./component/ShoppingCartBasic";
import ShoppingCartRedux from "./component/ShoppingCartRedux";
import AuthBasic from "./component/AuthBasic";
import AuthRedux from "./component/AuthRedux";

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
        <hr />
        <ShoppingCartBasic />
        <hr />
        <ShoppingCartRedux />
        <hr />
        <AuthBasic />
        <hr />
        <AuthRedux />
      </div>
    </Provider>
  );
};

export default App;