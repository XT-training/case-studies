import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../Page';
import commonUtil from '../../utils/commonUtil';
import ScreeningContainer from '../../containers/screening/ScreeningContainer';
import { title, meta, link } from '../assets';

class Screening extends Component {
    constructor(props) {
        super(props);
    }
    getMetaData() {
        return {
            title,
            meta,
            link,
            labels: this.props.labels
        };
    }

    render() {
        return (
            <Page {...this.getMetaData()}>
                <ScreeningContainer {...this.props} />
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    labels: state.app.labels
});

export default connect(mapStateToProps)(Screening);
