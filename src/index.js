import React from "react";
import ReactDOM from "react-dom";

// two ways of importing more than one values from a module:

// method1:
// the default value can have any naming but the others should have the same name as in the module from where they are exported
import pie, { doublePi, triplePi } from "./math.js";
// method2:
// importing all the values as a js object by the name 'PI'
// to get each value of the object using the . operator
import * as PI from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pie}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
    <br />
    <li>{PI.default}</li>
    <li>{PI.doublePi()}</li>
    <li>{PI.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
