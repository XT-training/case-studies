import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Reactable from 'reactable';
import { fetchData as fetchDataAction } from '../Invoices/actions';

// components
import QuickView from '../QuickView';

// constants
import { TABLE_COLUMNS, QUICK_VIEW_TYPE } from '../constants';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  static propTypes = {
    invoices: PropTypes.array,
    fetchData: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.columns = TABLE_COLUMNS;
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { invoices } = this.props;
    if (!invoices) {
      return null;
    }
    const data = invoices.map(row => {
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
        <Reactable
          data={data}
          columns={this.columns}
          onSort={(orderby, order) =>
            this.props.fetchData({
              orderby,
              order,
            })
          }
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  invoices: state.get('invoices'),
});

const mapDispatchToProps = dispatch => ({
  fetchData: params => dispatch(fetchDataAction(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
