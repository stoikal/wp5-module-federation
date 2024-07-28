import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import HelloWorld from "nav/HelloWorld";

const App = () => (
  <div>
    <HelloWorld />
    <div>Hi there, I'm React from Webpack 5.</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
