import React, { Fragment } from 'react';
import Reactable from 'reactable';
import getInvoice from './service';

// components
import QuickView from '../../components/QuickView';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    getInvoice({}, data => {
      this.setState({
        data,
      });
    });
  }

  renderQuickviewContent() {
    return <h1>Quick view Content</h1>
  }

  render() {
    return (
      <Fragment>
        <Reactable fetchData={getInvoice} data={this.state.data} />
        <QuickView viewType="sidebar" label="INV-001">{this.renderQuickviewContent()}</QuickView>
      </Fragment>
    );
  }
}
