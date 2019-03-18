import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData as fetchDataAction } from '../Invoices/actions';
import FilterComponent from '../../components/FilterStatus/FilterStatus';

const FilterStatus = ({ filter, fetchData }) => (
  <FilterComponent fetchData={fetchData} filter={filter} />
);

FilterStatus.propTypes = {
  filter: PropTypes.array,
  fetchData: PropTypes.func,
};

const mapStateToProps = state => ({
  filter: state.get('filter'),
});

const mapDispatchToProps = dispatch => ({
  fetchData: params => dispatch(fetchDataAction(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterStatus);
