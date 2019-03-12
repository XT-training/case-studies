import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../../pages/Page';
import commonUtil from '../../utils/commonUtil';
import HomeContainer from '../../containers/home/HomeContainer';

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

    pageMeta = () => {[]};

    pageLink = () => {[]};

    render() {
        return (
            <Page {...this.getMetaData()}>
                <HomeContainer {...this.props} />
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    homePage: state.homePage
});

export default connect(mapStateToProps)(HomePage);
