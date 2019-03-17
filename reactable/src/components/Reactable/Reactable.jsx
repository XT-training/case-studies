import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Table from "../Table/Table";
import Thead from "../Thead/Thead";
import Tbody from "../Tbody/Tbody";
import Tr from "../Tr/Tr";
import Th from "../Th/Th";
import Td from "../Td/Td";

const Head = ({ columns, cellDensity, onSort, currentTheme }) => (
  <Thead>
    <Tr>
      {columns.map(headingObject => (
        <Th
          cellDensity={cellDensity}
          data={headingObject}
          onSort={onSort}
          currentTheme={currentTheme}
        />
      ))}
    </Tr>
  </Thead>
);

const Body = ({ data, columns, cellDensity }) => (
  <Tbody>
    {data.map((row, index) => {
      return (
        <Tr key={`row_${index}`}>
          {columns.map(headingObject => {
            const isValueObject =
              typeof row[headingObject.key] === "object" &&
              row[headingObject.key].value;
            const isTh =
              isValueObject && row[headingObject.key].type === "heading";
            const Component = isTh ? Th : Td;
            const otherProp = isTh
              ? {
                  heading: true
                }
              : {};
            return (
              <Component
                cellDensity={cellDensity}
                key={`col_${headingObject.key}`}
                {...otherProp}
              >
                {isValueObject
                  ? row[headingObject.key].value
                  : row[headingObject.key]}
              </Component>
            );
          })}
        </Tr>
      );
    })}
  </Tbody>
);

class Reactable extends React.PureComponent {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array,
    cellDensity: PropTypes.oneOf([0.5, 1, 1.5])
  };

  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    this.state = {
      styles: {},
      data: props.data
    };
  }

  componentDidMount() {
    const tableCont = this.tableRef.current;
    if (this.tableCont) {
      this.setState({
        styles: { width: tableCont.clientWidth, height: tableCont.clientHeight }
      });
    }
  }

  render() {
    const {
      data,
      className,
      columns,
      cellDensity,
      onSort,
      currentTheme
    } = this.props;
    const { styles } = this.state;
    if (data instanceof Array && data.length > 0) {
      return (
        <div className={className} style={styles} ref={this.tableRef}>
          <Table>
            <Head
              columns={columns}
              cellDensity={cellDensity}
              onSort={onSort}
              currentTheme={currentTheme}
            />
            <Body data={data} columns={columns} cellDensity={cellDensity} />
          </Table>
        </div>
      );
    }

    return null;
  }
}

Reactable.defaultProps = {
  data: [],
  cellDensity: 0.5
};

export default styled(Reactable)`
  font-size: 1rem;
  overflow: scroll;
  position: relative;
`;
