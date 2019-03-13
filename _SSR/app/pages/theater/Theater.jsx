import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../Page';
import commonUtil from '../../utils/commonUtil';
import TheaterContainer from '../../containers/theater/TheaterContainer';

class HomePage extends Component {
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
                <TheaterContainer {...this.props} />
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    theaters: state.theaters
});

export default connect(mapStateToProps)(HomePage);
