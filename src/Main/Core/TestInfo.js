import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default class TestInfo extends React.Component {
  static defaultProps = {
    hidden: true,
    first: false,
    title: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      hidden: !props.first && props.hidden
    };
  }

  handleClick = () => {
    this.setState(prevState => {
      return { hidden: !prevState.hidden };
    });
  };

  render() {
    const { hidden } = this.state;
    const { children, title, first, location } = this.props;
    console.log(this.props);

    return (
      <div className="info">
        {title && <h2>{title}</h2>}

        {!hidden && children}

        {!first && (
          <div
            onClick={this.handleClick}
            className={classNames(
              "collapser",
              hidden ? "collapsed" : "expanded"
            )}
          >
            <div>toggle info</div>
          </div>
        )}

        {first && (
          <div onClick={this.handleClick} className="start-test">
            <Link to={location.pathname}>start</Link>
          </div>
        )}
      </div>
    );
  }
}
