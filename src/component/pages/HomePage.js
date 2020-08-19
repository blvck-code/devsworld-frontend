import React, { Component } from "react";
import { Navbar } from "../layouts/Navbar";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class HomePage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    if (this.props.auth.isAuthenticated && this.props.auth.token) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <>
        <section className="landing">
          <div className="overlay">
            <div className="showcase-inner">
              <h1 className="x-large">DevsWorld</h1>
              <p className="lead">
                Create developer profile/portfolio, share posts and get help
                from other developers
              </p>
              <div className="buttons">
                <Link to="/register" className="btn btn-secondary">
                  Register
                </Link>
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(HomePage);
