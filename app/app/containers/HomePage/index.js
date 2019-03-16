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
        key: 'client',
        value: 'Client',
      },
      {
        key: 'created',
        value: 'Created Date',
      },
      {
        key: 'status',
        value: 'Status',
      },
      {
        key: 'department',
        value: 'Department',
      },
      {
        key: 'index',
        value: 'Index',
      },
      {
        key: 'worked',
        value: 'Worked',
      },
    ];
  }

  componentDidMount() {
    getInvoice({}).then(response => {
      this.setState({
        data: response.data,
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
