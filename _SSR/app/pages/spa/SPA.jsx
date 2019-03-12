import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../../pages/Page';
import { Link } from 'react-router-dom';

class SPA extends Component {
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
                SPA Main <br />
                <br />
                <br />
                <Link to="/test">Test Link SPA</Link>
                <br />
                <br />
                <br />
                <Link to="/test/about">Nested Child Link</Link>
                <br />
            </Page>
        );
    }
}

export default SPA;
