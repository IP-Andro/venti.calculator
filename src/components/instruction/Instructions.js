// import React, { Component } from "react";
// import emoji from "./emoji.svg";
// import "./Instructions.css";

// export default class Instructions extends Component {
//   render() {
//     return (
//       <div className="instructions">
//         <img alt="laughing crying emoji" src={emoji} />
//         <p>Click on an emoji to view the emoji short name.</p>
//       </div>
//     );
//   }
// }
import React from "react";
import "./Instructions.css";
import emoji from "./emoji.svg";

const Instructions = () => (
  <div className="instructions">
    <img alt="laughing crying emoji" src={emoji} />
    <p>Click on an emoji to view the emoji short name.</p>
  </div>
);

export default Instructions;
