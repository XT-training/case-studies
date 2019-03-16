import React, { Fragment } from 'react';
import Reactable from 'reactable';
import { getInvoice } from './service';

// components
import QuickView from '../QuickView';

// constants
import { TABLE_COLUMNS, QUICK_VIEW_TYPE } from '../constants';
export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.columns = TABLE_COLUMNS;
  }

  componentDidMount() {
    getInvoice({}).then(response => {
      this.setState({
        data: response.data,
      });
    });
  }

  render() {
    const data = this.state.data.map(row => {
      const item = Object.assign({}, row);
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      item.client = (
        <QuickView
          viewType={QUICK_VIEW_TYPE}
          label={row.client}
          id={item._id}
        />
      );
      return item;
    });

    return (
      <Fragment>
        <Reactable data={data} columns={this.columns} />
      </Fragment>
    );
  }
}
