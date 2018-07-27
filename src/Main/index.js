import React from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";
import "./styles.css";

export default class Main extends React.Component {
  state = {
    start: false,
    hidden: false,
    step: 0
  };

  handleStart = () => {
    this.setState({ start: true, hidden: true, step: 1 });
  };

  render() {
    const { hidden, start } = this.state;

    return (
      <div className="main">
        {start && <Nav hidden={hidden} />}

        {!hidden && <Info />}

        {!start && (
          <div className="start" onClick={this.handleStart}>
            Start the test!
          </div>
        )}
      </div>
    );
  }
}

class Nav extends React.Component {
  static defaultProps = {
    hidden: true
  };

  constructor(props) {
    super(props);
    this.state = {
      hidden: props.hidden
    };
  }
  handleClick = () => {
    this.setState(prevState => {
      return { hidden: !prevState.hidden };
    });
  };

  render() {
    const { hidden } = this.props;
    return <div onClick={this.handleClick}>{hidden ? "Show" : "Hide"}</div>;
  }
}

class Info extends React.Component {
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
        <h1>Code Test</h1>

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
          Do not worry too much about formatting as codesandbox has automatic
          formatting.
        </p>

        <h2>Test</h2>

        <p>
          Build a react component which expects a prop
          <span className="code">users</span>, a list of users in the format
        </p>

        <pre>{JSON.stringify(data, undefined, 4)}</pre>

        <p>The component should render a table with showing the user data.</p>

        <h2>Rules</h2>
        <ol>
          <li>
            The component should render a table with three columns:{" "}
            <span className="code">id, name, email</span>.
          </li>

          <li>
            The table contents should reflect the contents of the list of users.
          </li>

          <li>
            The solution should be written in the{" "}
            <span className="code">Solution</span> folder.
          </li>

          <li>
            The component should be exported as default,
            <br />i.e.
            <span className="code">import Solution from "Solution"</span>
            should work.
          </li>
        </ol>
      </div>
    );
  }
}
