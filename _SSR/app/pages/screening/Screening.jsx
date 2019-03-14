import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../Page';
import commonUtil from '../../utils/commonUtil';
import ScreeningContainer from '../../containers/screening/ScreeningContainer';

class Screening extends Component {
    constructor(props) {
        super(props);
    }
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
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
                <ScreeningContainer {...this.props} />
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies
});

export default connect(mapStateToProps)(Screening);
