import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import HelloWorld from "remote1/HelloWorld";

const App = () => (
  <div>
    <HelloWorld />
    <div>Hi there, I'm React from Webpack 5.</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
