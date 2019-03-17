import React from 'react';
import { connect } from 'react-redux';
import { fetchData as fetchDataAction } from '../Invoices/actions';
import PaginationComponent from '../../components/Pagination/Pagination';

const Pagination = ({ pagination, fetchData }) => (
  <PaginationComponent fetchData={fetchData} {...pagination} />
);
const mapStateToProps = state => ({
  pagination: state.get('pagination'),
});

const mapDispatchToProps = dispatch => ({
  fetchData: params => dispatch(fetchDataAction(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
