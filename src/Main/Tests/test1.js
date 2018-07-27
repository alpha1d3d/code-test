import React from "react";

import { TestInfo } from "../Core";

export default class Test1 extends React.Component {
  render() {
    const data = {
      users: [
        {
          id: "integer",
          name: "string",
          email: "string"
        }
      ]
    };

    return (
      <div>
        <TestInfo title="Test 1">
          <p>
            Build a react component which expects a prop
            <span className="code">users</span>, a list of users in the format
          </p>

          <pre>{JSON.stringify(data, undefined, 4)}</pre>

          <p>The component should render a table with showing the user data.</p>

          <h2>Rules</h2>
          <ol>
            <li>
              Write your solution in
              <span className="code">src/Solution/solution1.js</span>
            </li>

            <li>
              The component should render a table with three columns:{" "}
              <span className="code">id, name, email</span>.
            </li>

            <li>
              The table contents should reflect the contents of the list of
              users.
            </li>
          </ol>
        </TestInfo>
      </div>
    );
  }
}
