import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popular from "./components/popular";
import Battle from "./components/battle";

class App extends React.Component {
  render() {
    return <Battle />;
  }
}

ReactDOM.render(<App />, document.querySelector(".App"));
