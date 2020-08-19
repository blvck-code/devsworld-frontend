import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class HomeProfile extends Component {
  static propTypes = {
    user: PropTypes.object,
    profile: PropTypes.object,
  };

  openModal = (id) => {
    // this.resetState();
    document.getElementById(id).style.display = "block";
  };

  render() {
    const { user, profile } = this.props;
    return (
      <div className="home-profile">
        <div className="profPic"></div>
        {user ? (
          <h4>
            {user.middle_name} {user.first_name} {user.last_name}
          </h4>
        ) : (
          ""
        )}
        {profile ? (
          <div>
            <p>{profile.profession}</p>
            <p>{profile.bio}</p>
          </div>
        ) : (
          <button>Add Profile</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profiles.myProfile,
  user: state.auth.user,
});

export default connect(mapStateToProps)(HomeProfile);
