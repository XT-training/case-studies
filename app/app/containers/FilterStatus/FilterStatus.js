import React from 'react';
import { connect } from 'react-redux';
import { fetchData as fetchDataAction } from '../Invoices/actions';
import FilterComponent from '../../components/FilterStatus/FilterStatus';

const FilterStatus = ({ status, fetchData }) => (
  <FilterComponent fetchData={fetchData} {...status} />
);
const mapStateToProps = state => ({
  filterStatus: state.get('status'),
});

const mapDispatchToProps = dispatch => ({
  fetchData: params => dispatch(fetchDataAction(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterStatus);
