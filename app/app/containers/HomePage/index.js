import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Reactable from 'reactable';
import { fetchData as fetchDataAction } from '../Invoices/actions';

// components
import QuickView from '../../components/QuickView';
import Pagination from '../Pagination/Pagination';
import theme from '../../theme';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  static propTypes = {
    invoices: PropTypes.array,
    fetchData: PropTypes.func,
    sort: PropTypes.object,
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
    this.props.fetchData({
      orderby: 'client',
      order: 'asc',
    });
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

    const columns = this.columns.map(col => {
      const colObj = Object.assign({}, col);
      if (colObj.key === this.props.sort.orderby) {
        colObj.order = this.props.sort.order;
      }
      return colObj;
    });

    return (
      <Fragment>
        <div className="margin-bottom">
          <Reactable
            data={data}
            columns={columns}
            onSort={(orderby, order) =>
              this.props.fetchData({
                orderby,
                order,
              })
            }
            theme={theme}
          />
        </div>
        <div className="margin-bottom">
          <Pagination />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  invoices: state.get('invoices'),
  sort: state.get('sort'),
});

const mapDispatchToProps = dispatch => ({
  fetchData: params => dispatch(fetchDataAction(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
