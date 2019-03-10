import React from 'react';

const Table = ({ data }) => (<div>
    <div>{data}</div>
    <table>
      <thead>
        <tr>
        <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => <tr><td>{row.name}</td></tr>)}
      </tbody>
    </table>
  </div>)

Table.defaultProps = {
  data: []
}

export default Table;
