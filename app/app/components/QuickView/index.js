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
    viewType: PropTypes.oneOf(['modal', 'sidebar', 'scrollDown']),
    data: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    fetchInvoice: PropTypes.func.isRequired,
  };

  static defaultProps = {
    viewType: 'modal',
  };

  showQuickviewHandler = () => {
    const { id, fetchInvoice } = this.props;
    const { showQuickview } = this.state;
    fetchInvoice(id);
    this.setState({ showQuickview: !showQuickview });
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
          {viewType !== 'scrollDown' && (
            <CloseButton onClick={this.closeModalHandler}>&times;</CloseButton>
          )}
          {this.renderQuickiewData()}
        </QuickViewMain>
      </QuickViewOverlay>
    );
  }

  renderQuickiewData() {
    const { data, viewType } = this.props;
    const { index, client, status } = data;
    const Content = styled('div')(styles.content(viewType));
    const Heading = styled('h3')(styles.heading);
    const TopSection = styled('div')(styles.topSection(viewType));
    const Breadcrumb = styled('p')(styles.breadcrumb(viewType));
    const PaymentButton = styled('button')(styles.button(viewType));
    const Column1 = styled('div')(styles.column1);
    const Column2 = styled('div')(styles.column2);

    if (viewType === 'modal') {
      return (
        <Content>
          <Column1>
            <Heading>
              &#8942;&nbsp;
              {index}
            </Heading>
            <TopSection>
              <Breadcrumb>{`${client} | ${status}`}</Breadcrumb>
              <PaymentButton>Record Payment</PaymentButton>
            </TopSection>
            {this.renderMiscellaneousDetail()}
          </Column1>
          <Column2>{this.renderItemTable()}</Column2>
        </Content>
      );
    }

    return (
      <Content>
        <Heading>
          &#8942;&nbsp;
          {index}
        </Heading>
        <TopSection>
          {viewType !== 'scrollDown' && (
            <Breadcrumb>{`${client} | ${status}`}</Breadcrumb>
          )}
          {viewType !== 'scrollDown' && (
            <PaymentButton>Record Payment</PaymentButton>
          )}
        </TopSection>
        {this.renderItemTable()}
        {viewType !== 'scrollDown' && this.renderMiscellaneousDetail()}
        {viewType === 'scrollDown' && (
          <PaymentButton>Record Payment</PaymentButton>
        )}
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
    const { data, viewType } = this.props;
    const MiscContainer = styled('div')(styles.miscContainer(viewType));
    const {
      client,
      customer,
      department,
      index,
      due,
      memo,
      created,
      service,
    } = data;
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
        key: 'INVOICE #',
        value: index,
      },
      {
        key: 'DEPARTMENT',
        value: department,
      },
      {
        key: 'CREATION',
        value: created,
      },
      {
        key: 'DUE',
        value: due,
      },
      {
        key: 'SERVICE',
        value: service,
      },
      {
        key: 'MEMO',
        value: memo,
      },
    ];
    return (
      <MiscContainer>
        <Reactable data={miscData} columns={QUICK_MISC_COLUMNS} />
      </MiscContainer>
    );
  }

  render() {
    const { showQuickview } = this.state;
    const { label, data, viewType } = this.props;

    return (
      <Fragment>
        <Button onClick={this.showQuickviewHandler}>
          {viewType === 'scrollDown' && (
            <span>
              {showQuickview ? (
                <span className="fa fa-angle-down" />
              ) : (
                <span className="fa fa-angle-up" />
              )}
              &nbsp;
            </span>
          )}
          {label}
        </Button>
        {showQuickview && data && data.items && this.renderModal()}
      </Fragment>
    );
  }
}

export default QuickView;
