import React from "react";
import { Link } from "react-router-dom";

import { TestInfo } from "../Core";
import { Solution } from "../../Solution";
import testData from "./data.json";

export default class Test1 extends React.Component {
  render() {
    const data = {
      users: [
        {
          id: "integer",
          name: "string",
          email: "string (nullable)"
        }
      ]
    };
    const { location } = this.props;
    const first = location.search === "?first";
    const users = testData.users.map(user => {
      const { id, name, email } = user;
      return { id: id, name: name, email: email };
    });

    return (
      <div>
        <TestInfo title="Test 1" first={first} location={location}>
          <p>
            Build a react component which expects a prop
            <span className="code">users</span>, a list of users in the format:
          </p>

          <pre>{JSON.stringify(data, undefined, 4)}</pre>

          <p>
            The component should render a table with headers "Id", "Name", and
            "Email" and display a row for each user data.
          </p>

          <h2>Rules</h2>
          <ol>
            <li>
              Write your solution in
              <span className="code">solution.js</span>
            </li>

            <li>
              The component should render a table with columns:
              <span className="code">Id, Name, Email</span>.
            </li>

            <li>
              The table contents should reflect the contents of the list of
              users.
            </li>
          </ol>
        </TestInfo>

        {!first && (
          <div className="solution">
            <Solution users={users} />
          </div>
        )}

        <div className="next">
          <Link to="test2?first">next</Link>
        </div>
      </div>
    );
  }
}
