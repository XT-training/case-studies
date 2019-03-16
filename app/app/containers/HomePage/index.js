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
    this.columns = [
      {
        key: 'Invoice',
        value: 'Invoice',
      },
      {
        key: 'Created',
        value: 'Created Date',
      },
      {
        key: 'Status',
        value: 'Status',
      },
      {
        key: 'Department',
        value: 'Department',
      },
      {
        key: 'Client',
        value: 'Client',
      },
      {
        key: 'Worked',
        value: 'Worked',
      },
      {
        key: 'Rate',
        value: 'Rate',
      },
      {
        key: 'Total',
        value: 'Total (INR)',
      },
    ];
  }

  componentDidMount() {
    getInvoice({}).then(response => {
      this.setState({
        data: response,
      });
    });
  }

  renderQuickviewContent() {
    return <h1>Quick view Content</h1>;
  }

  render() {
    return (
      <Fragment>
        <Reactable data={this.state.data} columns={this.columns} />
        <QuickView viewType="sidebar" label="INV-001">
          {this.renderQuickviewContent()}
        </QuickView>
      </Fragment>
    );
  }
}
