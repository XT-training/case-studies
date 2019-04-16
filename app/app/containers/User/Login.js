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
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user.userInfo && !this.props.user.userInfo) {
      this.props.history.push('/home');
    }
  }

  submitForm = e => {
    e.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <form onSubmit={this.submitForm} noValidate>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeHandler}
              />
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
              />
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
