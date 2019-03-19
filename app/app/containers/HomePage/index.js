import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Reactable from 'reactable';

import { fetchData as fetchDataAction } from '../Invoices/actions';

// components
import QuickView from '../QuickView';
import Pagination from '../Pagination/Pagination';
import FilterStatus from '../FilterStatus/FilterStatus';
import theme from '../../theme';

// constants
import { TABLE_COLUMNS, QUICK_VIEW_TYPE } from '../constants';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  static propTypes = {
    invoices: PropTypes.array,
    fetchData: PropTypes.func,
    sort: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.columns = TABLE_COLUMNS;
    this.state = {
      cellDensity: 0.5,
    };
    this.rowHeaderKey = 'client';
  }

  componentDidMount() {
    this.props.fetchData({
      orderby: 'client',
      order: 'asc',
    });
  }

  changeDensity(cellDensity) {
    this.setState({
      cellDensity,
    });
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
          <div className="mb-3 d-flex justify-content-between">
            <FilterStatus />
            <div className="btn-group" role="group" aria-label="Cell Density">
              <button
                type="button"
                className={classNames('btn btn-secondary', {
                  active: this.state.cellDensity === 0.5,
                })}
                onClick={() => this.changeDensity(0.5)}
              >
                1x
              </button>
              <button
                type="button"
                className={classNames('btn btn-secondary', {
                  active: this.state.cellDensity === 1,
                })}
                onClick={() => this.changeDensity(1)}
              >
                2x
              </button>
              <button
                type="button"
                className={classNames('btn btn-secondary', {
                  active: this.state.cellDensity === 1.5,
                })}
                onClick={() => this.changeDensity(1.5)}
              >
                3x
              </button>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <Reactable
            data={data}
            columns={columns}
            onSort={(orderby, order) =>
              this.props.fetchData({
                orderby,
                order,
                filter: false,
              })
            }
            theme={theme}
            cellDensity={this.state.cellDensity}
            resizable
            id="mainTable"
            rowHeaderKey={this.rowHeaderKey}
          />
        </div>
        <div className="mb-3">
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
