import React, { setGlobal } from 'reactn';
import ReactDOM from "react-dom";
import App from "./App";

setGlobal({
    pets: null,
  });

ReactDOM.render(<App />, document.querySelector("#root"));
