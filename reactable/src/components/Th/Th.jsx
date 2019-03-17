import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SortIcon from '../SortIcon/SortIcon';

class Th extends React.PureComponent {
  static propTypes = {
    onSort: PropTypes.func,
    data: PropTypes.object,
    currentTheme: PropTypes.object,
  };

  static defaultProps = {
    onSort: () => {}
  };

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    const { onSort, data } = this.props;
    const newOrder = data.order === '' ? 'asc' : (data.order === 'asc' ? 'desc' : 'asc');
    onSort(data.key, newOrder);
  }

  render(){
    const { data, className, key, currentTheme } = this.props;
    return <th className={className} key={key || data.key} onClick={this.clickHandler}>{data.value}<SortIcon order={data.order} currentTheme={currentTheme} /></th>;
  }
}

export default styled(Th)`
  background-color: #e5e5e5;
  padding: ${props => (`${props.cellDensity}rem`)};
  text-align: center;
  position: -webkit-sticky;
  position: sticky;
  color: ${props => props.theme && props.theme.color};
  ${props => (props.heading ? `
    left: 0;
  ` : `
    top: 0;
  `)}
`
