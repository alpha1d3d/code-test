import React from "react";

export default class TestInfo extends React.Component {
  state = {
    hidden: false
  };

  handleClick = () => {
    this.setState(prevState => {
      return { hidden: !prevState.hidden };
    });
  };

  render() {
    const { hidden } = this.state;
    const { children, title } = this.props;

    return (
      <div className="info">
        {title && <h2>{title}</h2>}

        {!hidden && children}

        <div onClick={this.handleClick}>{hidden ? "Show" : "Hide"}</div>
      </div>
    );
  }
}
