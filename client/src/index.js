import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import { unregister } from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
unregister();
