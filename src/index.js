import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home";
import "./styles/index.scss";

const App = () => {
  return <Home />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
