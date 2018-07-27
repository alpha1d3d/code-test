import React from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

export class Start extends React.Component {
  render() {
    return (
      <div>
        <h2>Abstract</h2>

        <p>
          The purpose this test is not to see how fast you complete it, but
          rather to understand your thought process.
        </p>

        <p>
          While looking up information is permitted, please do not copy-paste
          code.
        </p>

        <p>
          Do not worry too much about formatting but keep in mind that as
          reviewers we need to be able to read the code.
        </p>

        <div className="start">
          <Link to="test1?first">Click to get started!</Link>
        </div>
      </div>
    );
  }
}
