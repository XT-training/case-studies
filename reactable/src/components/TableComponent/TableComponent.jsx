import React from 'react';
import styled from '@emotion/styled';

import Table from '../Table/Table';
import Thead from '../Thead/Thead';
import Tbody from '../Tbody/Tbody';
import Tr from '../Tr/Tr';
import Th from '../Th/Th';
import Td from '../Td/Td';


class TableComponent extends React.PureComponent {
  renderHead(data){
    const headingArray = Object.keys(data[0]);
    return (<Thead>
      <Tr>
        {headingArray.map(heading => <Th key={heading}>{heading}</Th>)}
      </Tr>
    </Thead>);
  }

  renderBody(data){
    const headingArray = Object.keys(data[0]);
    return (<Tbody>
      {data.map((row, index) => {
        return <Tr key={`row_${index}`}>
          {headingArray.map(key => <Td key={`col_${key}`}>{row[key]}</Td>)}
        </Tr>
      })}
    </Tbody>);
  }
  render(){
    const { data, className } = this.props;
    if(data instanceof Array && data.length > 0){
      return (
      <div className={className}>
        <Table>
          {this.renderHead(data)}
          {this.renderBody(data)}
        </Table>
      </div>
      );
    }

    return null;
  }
}

TableComponent.defaultProps = {
  data: []
}

export default styled(TableComponent)`
  font-size: 1rem;
  overflow: scroll;
  position: relative;
  max-height: 200px;
  width: 100%;
`;
