import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { logout as logoutAction } from '../User/actions';

/* eslint-disable react/prefer-stateless-function */
class Login extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func,
    location: PropTypes.object,
    history: PropTypes.object,
  };

  logout = () => {
    this.props.logout();
  };

  componentDidUpdate() {
    if (!this.props.user.userInfo && this.props.location.pathname !== '/') {
      this.props.history.push('/');
    }
  }

  render() {
    const { userInfo } = this.props.user;
    return (
      <header className="container mb-1">
        <nav className="navbar navbar-light bg-light px-0 justify-content-between">
          <Link className="navbar-brand" to="/">
            <img
              src="/table-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top  mr-2"
              alt=""
            />
            DataTable App
          </Link>
          {userInfo ? (
            <div>
              <span className="navbar-text">Welcome {userInfo.name}</span>
              <button
                type="button"
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={this.logout}
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link className="btn btn-outline-success my-2 my-sm-0" to="/">
              Login
            </Link>
          )}
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),
});

const mapStateToProps = state => ({
  user: state.get('user'),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login),
);
