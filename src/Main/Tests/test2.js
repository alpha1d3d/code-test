import React from "react";

import { TestInfo } from "../Core";
import { Solution } from "../../Solution";
import testData from "./data.json";

export default class Test2 extends React.Component {
  render() {
    const data = {
      start_date: "string (dd/mm/yyyy)"
    };
    const { location } = this.props;
    const first = location.search === "?first";

    return (
      <div>
        <TestInfo title="Test 2" first={first} location={location}>
          <p>
            Based on the previous test, we have now added a new column to the
            data <span className="code">Start Date</span>
          </p>

          <pre>{JSON.stringify(data, undefined, 4)}</pre>

          <p>
            Update your component to additionally render the new column "Start
            Date" and make the column sortable by clicking on the header "Start
            Date".
          </p>

          <h2>Rules</h2>
          <ol>
            <li>
              Update your solution in
              <span className="code">solution.js</span>
            </li>

            <li>
              The component should now render four columns:
              <span className="code">Id, Name, Email, Start Date</span>.
            </li>

            <li>
              The table contents should reflect the contents of the list of
              users.
            </li>

            <li>
              Clicking on the column header "Start Date" sorts the column in
              ascending order.
            </li>
          </ol>
        </TestInfo>

        {!first && (
          <div className="solution">
            <Solution users={testData.users} />
          </div>
        )}
      </div>
    );
  }
}
