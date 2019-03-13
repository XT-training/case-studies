import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData as fetchDataAction } from '../actions';
import ReactableComponent from '../../components/Reactable/ReactableComponent';

const mapDispatchToProps = dispatch => ({
  onInit: (fetchData, settings) => {
    dispatch(fetchDataAction(fetchData, settings));
  }
});

class Reactable extends React.PureComponent {
  static propTypes = {
    fetchData: PropTypes.func,
    settings: PropTypes.object,
    onInit: PropTypes.func,
  };

  static defaultProps = {
    fetchData: () => {},
    settings: {}
  };

  componentDidMount(){
    const { fetchData, onInit, settings } = this.props;
    onInit(fetchData, settings);
  }

  render(){
    return <ReactableComponent />;
  }
}

export default connect(null, mapDispatchToProps)(Reactable);
