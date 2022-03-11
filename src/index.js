import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components";
//Steven Was here
ReactDom.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById("app")
);
