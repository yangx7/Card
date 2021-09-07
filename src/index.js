import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home";
import Card from "./card";
import "./styles/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/card" component={Card} />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
