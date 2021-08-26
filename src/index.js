import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home";

import "./index.css";

const App = () => {
  return <Home />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
