import React from "react";

import { TestInfo } from "../Core";
import { Solution1 } from "../../Solution";
import testData from "./test1.json";

export default class Test1 extends React.Component {
  render() {
    const data = {
      users: [
        {
          id: "integer",
          name: "string",
          email: "string (nullable)",
          start_date: "dd/mm/yyyy"
        }
      ]
    };
    const { location } = this.props;
    const first = location.search === "?first";

    return (
      <div>
        <TestInfo title="Test 1" first={first} location={location}>
          <p>
            Build a react component which expects a prop
            <span className="code">users</span>, a list of users in the format:
          </p>

          <pre>{JSON.stringify(data, undefined, 4)}</pre>

          <p>
            The component should render a table with headers "Id", "Name",
            "Email" and "Start Date" and display a row for each user data.
          </p>

          <h2>Rules</h2>
          <ol>
            <li>
              Write your solution in
              <span className="code">solution1.js</span>
            </li>

            <li>
              The component should render a table with columns:
              <span className="code">Id, Name, Email, Start Date</span>.
            </li>

            <li>
              The table contents should reflect the contents of the list of
              users.
            </li>
          </ol>
        </TestInfo>

        {!first && (
          <div className="solution">
            <Solution1 users={testData.users} />
          </div>
        )}
      </div>
    );
  }
}
