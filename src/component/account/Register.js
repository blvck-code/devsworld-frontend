import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

export class Register extends Component {
  state = {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { email, first_name, last_name, password, password2 } = this.state;
    const newUser = { email, first_name, last_name, password, password2 };
    this.props.register(newUser);
    this.setState({
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      password2: "",
    });
  };

  render() {
    const { email, first_name, last_name, password, password2 } = this.state;

    if (this.props.auth.isAuthenticated && this.props.auth.token) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="sign-up">
        <div className="wrapper">
          <div className="logo">
            <h1>
              DevsWorld <span className="text-black">K</span>
              <span className="text-red">E</span>
            </h1>
          </div>
          <form onSubmit={this.onSubmit} className="form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="off"
                autoSave="off"
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                autoComplete="off"
                autoSave="off"
                value={first_name}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Surname"
                name="last_name"
                autoComplete="off"
                autoSave="off"
                value={last_name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="off"
                autoSave="off"
                value={password}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                autoComplete="off"
                autoSave="off"
                name="password2"
                value={password2}
                onChange={this.onChange}
              />
            </div>
            <button className="btn btn-primary">Sign Up</button>
          </form>
          <div className="links">
            <Link to="/reset-password">
              <p>Forgot password? </p>
            </Link>
          </div>
          <div className="or">
            <hr className="bar" />
            <span>OR</span>
            <hr className="bar" />
          </div>
          <Link to="/login" className="btn btn-secondary">
            Log In
          </Link>
          <footer className="footer">
            <p>Copyright &copy; 2020, DevsWorld KE All Rights Reserved</p>
            <div>
              <Link to="#">Terms of Use</Link> |{" "}
              <Link to="#">Privacy Policy</Link>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { register })(Register);
