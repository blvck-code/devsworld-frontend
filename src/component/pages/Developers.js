import React, { Component } from "react";
import Navbar from "../layouts/Navbar";
import { developers } from "../../actions/profiles";
import { connect } from "react-redux";
import user from "../img/default.png";
import { Link } from "react-router-dom";
import Alerts from "../layouts/Alerts";
import spinner from '../img/spinner.gif'

export class Developers extends Component {

  state = {
    isMounted : false
  }

  componentDidMount() {
    const { developers} = this.props

    developers();

    setTimeout(() => {
      this.setState({
        isMounted: true
      })
    }, 1000);
  }

  componentWillMount(){
    this.props.developers();
  }

  render() {
    const { devs } = this.props;
    const { isMounted } = this.state;

    return (
      <>
        <Navbar />
        <Alerts />
        <div className="container">
          <div className="title">
            <h2>Developers</h2>
            <h3>
              <i className="fa fa-connectdevelop"></i> Browse and connect with
              developers
            </h3>
          </div>
          <div className="profile">
            {devs.length === 0 ?  <div className="spinner"><img src={spinner} alt="spinner"/></div>:""}
            {isMounted && devs !== "" ? (
              <>
                {devs.map((dev) => (
                  <div className="dev-item" key={dev.slug}>
                    <div className="dp">
                      <Link to={`developers/${dev.slug}`}>
                        {dev.profile_pic ? (
                          <>
                            <img src={dev.profile_pic} alt="DevPic" />
                          </>
                        ) : (
                          <>
                            <img src={user} alt="DevPic" />
                          </>
                        )}
                      </Link>
                    </div>
                    <div className="info">
                      <h2>
                        {dev.first_name} {dev.last_name}
                      </h2>

                      {dev.location ? (
                        <h3>
                          {dev.location}, {dev.country}
                        </h3>
                      ) : (
                        ""
                      )}
                      <Link to={`developers/${dev.slug}`}>
                        <button className="btn btn-dark">View Profile</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h3>There are currently not developers</h3>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  devs: state.profiles.developers,
});

export default connect(mapStateToProps, { developers })(Developers);
