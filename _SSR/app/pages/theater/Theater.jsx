import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../Page';
import commonUtil from '../../utils/commonUtil';
import TheaterContainer from '../../containers/theater/TheaterContainer';
import { IntlProvider } from 'react-intl';

class Theatre extends Component {
    constructor(props) {
        super(props);
    }
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink(),
            labels: this.props.labels
        };
    }
    // TODO:: title,meta,link function should be part of parent class.
    pageTitle = () => 'Title';

    pageMeta = () => {
        [];
    };

    pageLink = () => {
        [];
    };

    render() {
        return (
            <Page {...this.getMetaData()}>
                <TheaterContainer {...this.props} />
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    theaters: state.theaters,
    labels: state.app.labels
});

export default connect(mapStateToProps)(Theatre);
