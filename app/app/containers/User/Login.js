import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login as loginAction } from './actions';

/* eslint-disable react/prefer-stateless-function */
class Login extends React.PureComponent {
  static propTypes = {
    login: PropTypes.func,
    history: PropTypes.object,
    user: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formError: false,
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user.userInfo && !this.props.user.userInfo) {
      this.props.history.push('/home');
    }
  }

  submitForm = e => {
    e.preventDefault();
    const error = {};
    if (!this.state.email || !/[^@]+@[^\\.]+\..+/.test(this.state.email)) {
      error.emailError = 'Please provide a valid email';
    }
    if (!this.state.password || this.state.password.length < 6) {
      error.passwordError = 'Please provide a valid password';
    }
    if (Object.keys(error).length === 0) {
      this.props.login({
        email: this.state.email,
        password: this.state.password,
      });
    } else {
      this.setState(Object.assign({}, error, { formError: true }));
    }
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
      formError: false,
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-4 offset-4">
          {this.props.user.errorMessage && (
            <div className="alert alert-danger" role="alert">
              {this.props.user.errorMessage}
            </div>
          )}
          <form
            onSubmit={this.submitForm}
            className={this.state.formError ? 'was-validated' : ''}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeHandler}
                required
              />
              {this.state.emailError && (
                <div className="invalid-feedback">{this.state.emailError}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                value={this.state.password}
                onChange={this.onChangeHandler}
                required
              />
              {this.state.passwordError && (
                <div className="invalid-feedback">
                  {this.state.passwordError}
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: params => dispatch(loginAction(params)),
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
