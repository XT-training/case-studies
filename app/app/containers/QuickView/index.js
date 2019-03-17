import React from 'react';
import { connect } from 'react-redux';

// actions
import { fetchInvoice as fetchInvoiceAction } from '../Invoices/actions';

// components
import QuickViewComponent from '../../components/QuickView';

const QuickView = props => <QuickViewComponent {...props} />;

const mapStateToProps = state => ({
  data: state.get('invoice'),
});

const mapDispatchToProps = dispatch => ({
  fetchInvoice: params => dispatch(fetchInvoiceAction(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuickView);
