import React from 'react';

class Table extends React.PureComponent {
  renderHead(data){
    const headingArray = Object.keys(data[0]);
    return (<thead>
      <tr>
        {headingArray.map(heading => <th key={heading}>{heading}</th>)}
      </tr>
    </thead>);
  }

  renderBody(data){
    const headingArray = Object.keys(data[0]);
    return (<tbody>
      {data.map((row, index) => {
        return <tr key={`row_${index}`}>
          {headingArray.map(key => <td key={`col_${key}`}>{row[key]}</td>)}
        </tr>
      })}
    </tbody>);
  }
  render(){
    const { data } = this.props;
    if(data instanceof Array && data.length > 0){
      return (<table style={{border:'1px solid #d3d3d3', width: '100%', textAlign: 'center'}}>
        {this.renderHead(data)}
        {this.renderBody(data)}
      </table>);
    }

    return null;
  }
}

Table.defaultProps = {
  data: []
}

export default Table;
