import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  authLinks = (
    <ul>
      <li>
        <NavLink to="/home">Developer</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">
          <i className="fa fa-user"></i> Dashboard
        </NavLink>
      </li>
      <li onClick={this.props.logout}>
        <i className="fa fa-sign-out"></i> Logout
      </li>
    </ul>
  );

  guestLinks = (
    <ul>
      <li>
        <NavLink to="/dashboard">Developer</NavLink>
      </li>
      <li>
        <NavLink to="#">Login</NavLink>
      </li>
      <li>
        <NavLink to="#">Register</NavLink>
      </li>
    </ul>
  );
  render() {
    const { auth } = this.props;
    return (
      <nav className="navbar bg-dark">
        <div className="wrapper">
          <h1 className="logo orange">
            <h1>
              <i className="fa fa-code"></i> DevsWorld{" "}
              <span className="text-black">K</span>
              <span className="text-red">E</span>
            </h1>
          </h1>
          {auth.isAuthenticated && auth.token
            ? this.authLinks
            : this.guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
