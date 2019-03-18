import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class FilterStatus extends React.PureComponent {
  static propTypes = {
    fetchData: PropTypes.func,
    itemsperpage: PropTypes.number,
    count: PropTypes.number,
    startindex: PropTypes.number,
    status:PropTypes.string
  };

  constructor(props) {
    super(props);
    this.status = 0;
  }

  handleChange = (event) => {
    let filter = (event.target.value !== 'All Statusess' )? JSON.stringify([{status:event.target.value}]) : "";

    this.props.fetchData({
      filter: filter,
      startindex: 0
    });

  };

  render() {
    const { status } = this.props;

    let filterOption = ['All Statusess', 'Outstanding', 'Approved', 'Rejected'];

    return (
      <select className="custom-select" onChange={this.handleChange}>
        {filterOption.map( (val,index) => (
          <option key={`filter_${index}`} value={val}>{val}</option>
        ))}
      </select>
    );
  }
}

export default FilterStatus;
