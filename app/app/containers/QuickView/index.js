import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import QuickViewComponent from '../../components/QuickView';

// service
import { getInvoiceById } from '../HomePage/service';

class QuickView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { id } = this.props;

    getInvoiceById(id).then(response => {
      this.setState({ data: response.data });
    });
  }

  render() {
    const { data } = this.state;
    return <QuickViewComponent data={data} {...this.props} />;
  }
}

export default QuickView;
