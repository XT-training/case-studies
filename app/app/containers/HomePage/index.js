import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Reactable from 'reactable';
import { fetchData as fetchDataAction } from '../Invoices/actions';

// components
import QuickView from '../../components/QuickView';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  static propTypes = {
    invoices: PropTypes.array,
    fetchData: PropTypes.func,
  };

  constructor(props) {
    super(props);
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
    this.props.fetchData();
  }

  renderQuickviewContent() {
    return <h1>Quick view Content</h1>;
  }

  render() {
    if (!this.props.invoices) {
      return null;
    }
    const data = this.props.invoices.map(row => {
      const items = Object.assign({}, row);

      items.client = (
        <QuickView viewType="modal" label={row.client}>
          {this.renderQuickviewContent()}
        </QuickView>
      );
      return items;
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
