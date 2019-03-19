import React from "react";
import ReactDOM from "react-dom";
import ColumnResizer from "column-resizer";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Table from "../Table/Table";
import Thead from "../Thead/Thead";
import Tbody from "../Tbody/Tbody";
import Tr from "../Tr/Tr";
import Th from "../Th/Th";
import Td from "../Td/Td";

const Head = ({ columns, cellDensity, onSort, currentTheme, rowHeaderKey }) => (
  <Thead>
    <Tr key={'row_header'}>
      {rowHeaderKey && <Th key={`row_header_${rowHeaderKey}`} cellDensity={cellDensity} data={{ key: rowHeaderKey, value: '' }} currentTheme={currentTheme} scope="col"/>}
      {columns.map(headingObject => {
        if(headingObject.key !== rowHeaderKey){
          return <Th
          key={`row_header_${headingObject.key}`}
          cellDensity={cellDensity}
          data={headingObject}
          onSort={onSort}
          currentTheme={currentTheme}
          scope="col"
        />
        }
        return null;
      })}
    </Tr>
  </Thead>
);

const Body = ({ data, columns, cellDensity, rowHeaderKey, currentTheme }) => (
  <Tbody>
    {data.map((row, index) => {
      return (
        <Tr key={`row_${index}`}>
          {columns.map(headingObject => {
            const isTh =
              headingObject.key === rowHeaderKey;
            {return isTh ? <Th cellDensity={cellDensity} data={{ key: rowHeaderKey, value: row[headingObject.key] }} currentTheme={currentTheme} scope="row"/> : <Td cellDensity={cellDensity}
            key={`col_${headingObject.key}`}
            >{row[headingObject.key]}</Td>}
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
    cellDensity: PropTypes.oneOf([0.5, 1, 1.5]),
    id: PropTypes.string.isRequired,
    resizable: PropTypes.bool,
    resizerOptions: PropTypes.object,
    rowHeaderKey: PropTypes.string,
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
    if (this.props.resizable) {
      this.enableResize();
    }
  }

  componentWillUnmount() {
    if (this.props.resizable) {
      this.disableResize();
    }
  }

  componentDidUpdate() {
    if (this.props.resizable) {
      this.enableResize();
    }
  }

  componentWillUpdate() {
    if (this.props.resizable) {
      this.disableResize();
    }
  }

  enableResize() {
    const { id, resizerOptions } = this.props;
    const options = resizerOptions;

    const target =
      id &&
      ReactDOM.findDOMNode(this) &&
      ReactDOM.findDOMNode(this).querySelector(`#${id}`);

    if (target) {
      if (!this.resizer) {
        this.resizer = new ColumnResizer(
          ReactDOM.findDOMNode(this).querySelector(`#${id}`),
          options
        );
      } else {
        this.resizer.reset(options);
      }
    }
  }

  disableResize() {
    if (this.resizer) {
      this.resizer.reset({ disable: true });
    }
  }

  render() {
    const {
      data,
      className,
      columns,
      cellDensity,
      onSort,
      currentTheme,
      id,
      rowHeaderKey
    } = this.props;
    const { styles } = this.state;
    if (data instanceof Array && data.length > 0) {
      return (
        <div className={className} style={styles} ref={this.tableRef}>
          <Table id={id}>
            <Head
              columns={columns}
              cellDensity={cellDensity}
              onSort={onSort}
              currentTheme={currentTheme}
              rowHeaderKey={rowHeaderKey}
            />
            <Body data={data} columns={columns} cellDensity={cellDensity}  rowHeaderKey={rowHeaderKey} currentTheme={currentTheme}/>
          </Table>
        </div>
      );
    }

    return null;
  }
}

Reactable.defaultProps = {
  data: [],
  cellDensity: 0.5,
  resizable: false,
  resizerOptions: {},
  currentTheme: {}
};

export default styled(Reactable)`
  font-size: 1rem;
  overflow: scroll;
  position: relative;
`;
