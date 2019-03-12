import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../pages/Page';
import AppContainer from '../containers/App';
import { title, meta, link } from './assets';

class App extends Component {
    renderContainer() {
        const { props } = this;
        return <AppContainer {...props} />;
    }

    render() {
        return (
            <Page title={title} meta={meta} link={link}>
                {this.renderContainer()}
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    cms: state.cms
});

export default connect(mapStateToProps)(App);
