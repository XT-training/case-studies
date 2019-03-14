import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// styles
import styles from './quickView.style';

//
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
    children: PropTypes.element,
    viewType: PropTypes.oneOf(['modal', 'sidebar']),
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
    const { viewType, children } = this.props;
    const QuickViewOverlay = styled('div')(styles.overlay(viewType));
    const QuickViewMain = styled('div')(styles.quickviewMain(viewType));
    const CloseButton = styled('button')(styles.closeIcon(viewType));

    return (
      <QuickViewOverlay>
        <QuickViewMain>
          <CloseButton onClick={this.closeModalHandler}>&times;</CloseButton>
          {children}
        </QuickViewMain>
      </QuickViewOverlay>
    );
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
