import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

class Th extends React.PureComponent {
  static propTypes = {
    onSort: PropTypes.func,
    data: PropTypes.object
  };

  static defaultProps = {
    onSort: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      order: props.data.order
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { onSort, data } = this.props;
    const newOrder =
      this.state.order === ""
        ? "asc"
        : this.state.order === "asc"
        ? "desc"
        : "asc";
    this.setState(
      {
        order: newOrder
      },
      () => {
        onSort(data.key, this.state.order);
      }
    );
  }

  render() {
    const { data, className, key } = this.props;
    return (
      <th
        className={className}
        key={key || data.key}
        onClick={this.clickHandler}
      >
        {data.value}
      </th>
    );
  }
}

export default styled(Th)`
  background-color: #e5e5e5;
  padding: ${props => `${props.cellDensity}rem`};
  text-align: left;
  position: -webkit-sticky;
  position: sticky;
  color: ${props => props.theme && props.theme.color};
  ${props =>
    props.heading
      ? `
    left: 0;
  `
      : `
    top: 0;
  `}
`;
