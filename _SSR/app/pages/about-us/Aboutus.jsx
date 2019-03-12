import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../../pages/Page';
import AboutusContainer from '../../containers/aboutus/Aboutus';

class Aboutus extends Component {
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
    pageTitle = () => 'Page Title';

    pageMeta = () => {[]};

    pageLink = () => {[]};

    render() {
        return (
            <Page {...this.getMetaData()}>
                <AboutusContainer />
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    data: state.homePage
});

export default connect(mapStateToProps)(Aboutus);
