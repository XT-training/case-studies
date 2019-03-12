import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
/**
 * Higher-order component (HOC) to wrap restricted pages
 */
const BaseComponent = (ParsedComponent) => {
    class Authentication extends Component {
        componentWillMount() {
            this.checkAuthentication(this.props);
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.location !== this.props.location) {
                this.checkAuthentication(nextProps);
            }
        }

        checkAuthentication(params) {
            const { history } = params;

            /**
             * Here we need to validate state as logged-in from store object.
             * if User is logged-in component will get render
             * else user will be redirect to login page.
             *
             * */
            if (this.props.user && !this.props.user.isLoggedIn) {
                history.replace({ pathname: '/login' });
            }
        }

        render() {
            return <ParsedComponent {...this.props} />;
        }
    }
    return withRouter(Authentication);
};

export default BaseComponent;
