import React from 'react';
import PropTypes from 'prop-types';

class FilterStatus extends React.PureComponent {
  static propTypes = {
    fetchData: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.filterOptions = [
      {
        label: 'All Statusess',
        value: '',
      },
      {
        label: 'Outstanding',
        value: 'Outstanding',
      },
      {
        label: 'Approved',
        value: 'Approved',
      },
      {
        label: 'Rejected',
        value: 'Rejected',
      },
    ];
  }

  handleChange = event => {
    const status = event.target.value;
    const filter = status ? JSON.stringify([{ status }]) : false;
    this.props.fetchData({
      filter,
      startindex: 0,
    });
  };

  render() {
    return (
      <select onChange={this.handleChange} className="custom-select width-15">
        {this.filterOptions.map(filter => (
          <option key={filter.value} value={filter.value}>
            {filter.label}
          </option>
        ))}
      </select>
    );
  }
}

export default FilterStatus;
