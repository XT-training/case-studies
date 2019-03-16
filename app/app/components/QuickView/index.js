import React, { Component, Fragment } from 'react';
import Reactable from 'reactable';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// styles
import styles from './quickView.style';

// contants
import {
  QUICK_VIEW_COLUMNS,
  QUICK_MISC_COLUMNS,
} from '../../containers/constants';

// components
const Button = styled('button')(styles.labelLink);

class QuickView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuickview: false,
    };
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
    viewType: PropTypes.oneOf(['modal', 'sidebar']),
    data: PropTypes.object.isRequired,
  };

  static defaultProps = {
    viewType: 'modal',
  };

  showQuickviewHandler = () => {
    this.setState({ showQuickview: true });
  };

  closeModalHandler = () => {
    this.setState({ showQuickview: false });
  };

  renderModal() {
    const { viewType } = this.props;
    const QuickViewOverlay = styled('div')(styles.overlay(viewType));
    const QuickViewMain = styled('div')(styles.quickviewMain(viewType));
    const CloseButton = styled('button')(styles.closeIcon(viewType));

    return (
      <QuickViewOverlay>
        <QuickViewMain>
          <CloseButton onClick={this.closeModalHandler}>&times;</CloseButton>
          {this.renderQuickiewData()}
        </QuickViewMain>
      </QuickViewOverlay>
    );
  }

  renderQuickiewData() {
    const { data } = this.props;
    const { index, client, status } = data;
    const Content = styled('div')(styles.content);
    const Heading = styled('h3')(styles.heading);
    const TopSection = styled('div')(styles.topSection);
    const Breadcrumb = styled('p')(styles.breadcrumb);
    const PaymentButton = styled('button')(styles.button);

    return (
      <Content>
        <Heading>
          &#8942;&nbsp;
          {index}
        </Heading>
        <TopSection>
          <Breadcrumb>{`${client} | ${status}`}</Breadcrumb>
          <PaymentButton>Record Payment</PaymentButton>
        </TopSection>
        {this.renderItemTable()}
        {this.renderMiscellaneousDetail()}
      </Content>
    );
  }

  renderItemTable() {
    const { data } = this.props;
    const { items } = data;

    const SummaryContainer = styled('div')(styles.summaryContainer);
    const SummaryLabel = styled('div')(styles.summaryLabel);
    const SummaryKey = styled('div')(styles.summaryKey);

    const tableItems = items.map(row => {
      const item = Object.assign({}, row);
      const { quantity, rate } = item;
      const total = (quantity * rate.replace(/[^0-9\.]+/g, '')).toFixed(2);
      item.total = total;
      return item;
    });

    const grandTotal = tableItems.reduce(
      (total, item) => total + parseInt(item.total),
      0,
    );

    return (
      <Fragment>
        <Reactable data={tableItems} columns={QUICK_VIEW_COLUMNS} />
        <SummaryContainer>
          <SummaryLabel>Total</SummaryLabel>
          <SummaryKey>${grandTotal}</SummaryKey>
          <SummaryLabel>Payments</SummaryLabel>
          <SummaryKey>${120}</SummaryKey>
          <SummaryLabel>Payment Due</SummaryLabel>
          <SummaryKey>${grandTotal - 120}</SummaryKey>
        </SummaryContainer>
      </Fragment>
    );
  }

  renderMiscellaneousDetail() {
    const { data } = this.props;
    const { client, customer, memo } = data;
    const miscData = [
      {
        key: 'CLIENT',
        value: client,
      },
      {
        key: 'PROJECT',
        value: customer,
      },
      {
        key: 'MEMO',
        value: memo,
      },
    ];
    return <Reactable data={miscData} columns={QUICK_MISC_COLUMNS} />;
  }

  render() {
    const { showQuickview } = this.state;
    const { label } = this.props;
    return (
      <Fragment>
        <Button onClick={this.showQuickviewHandler}>{label}</Button>
        {showQuickview && this.renderModal()}
      </Fragment>
    );
  }
}

export default QuickView;
