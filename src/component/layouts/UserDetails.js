import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateProfile } from "../../actions/profiles";
import ContactInfo from "./ContactInfo";

export class UserDetails extends Component {
  static propTypes = {
    user: PropTypes.object,
    profile: PropTypes.object,
  };

  openModal = (id) => {
    // this.resetState();
    document.getElementById(id).style.display = "block";
  };

  closeModal = (id) => {
    document.getElementById(id).style.display = "none";
  };

  clickOutside = (e) => {
    if (e.target === document.getElementById("profileModal")) {
      document.getElementById("profileModal").style.display = "none";
    }
  };

  render() {
    const { user, profile } = this.props;
    window.addEventListener("click", this.clickOutside);

    return (
      <section className="profile-inner">
        <div className="modal" id="profileModal">
          <div className="modal-content">
            <div className="modal-title">
              <h2>Edit profile</h2>
              <h1 onClick={() => this.closeModal("profileModal")}>
                <i className="fa fa-close"></i>
              </h1>
            </div>
            <div className="modal-body">
              <div className="profileModal">
                <div className="form-group">
                  <label htmlFor="profession">
                    Profession<span>*</span>
                  </label>
                  <select name="profession">
                    <option value="0">* Select Proffessional Status</option>
                    <option value="Developer">Developer</option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Senior Developer">Senior Developer</option>
                    <option value="Manager">Manager</option>
                    <option value="Student or Learning">
                      Student or Learning
                    </option>
                    <option value="Instructor">Instructor or Teacher</option>
                    <option value="Intern">Intern</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" name="company" />
                </div>

                <div className="form-group">
                  <label htmlFor="website">Website URL</label>
                  <input
                    type="url"
                    name="website"
                    placeholder="https://www.mysite.com"
                  />
                </div>

                <div className="group-input">
                  <div className="location">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Nairobi, Kenya"
                    />
                  </div>
                  <div className="github_username">
                    <label htmlFor="github_username">Github username</label>
                    <input type="text" name="github_username" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="bio">Bio</label>
                  <textarea />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-modal">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="modal" id="contactModal">
          <ContactInfo />
        </div>

        <div className="user-info">
          <div className="bg"></div>
          <div className="access">
            <div className="edit-dp">
              <div className="dp"></div>
            </div>
            <div className="edit-profile">
              <button>More...</button>
              <p onClick={() => this.openModal("profileModal")}>
                <i className="fa fa-pencil"></i> Edit profile
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="user-details">
              {user ? (
                <h4>
                  {user.middle_name} {user.first_name} {user.last_name}
                </h4>
              ) : (
                ""
              )}
              {profile ? <p>{profile.bio}</p> : ""}
              <div className="footer">
                {/* {profile ? <p>{profile.location}</p> : ""} */}
                <p onClick={() => this.openModal("contactModal")}>
                  Contact info
                </p>
              </div>
            </div>
            <div className="profile-details">
              {profile ? (
                <p>
                  <i className="fa fa-black-tie"></i>
                  {profile.profession} at {profile.company}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <footer></footer>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  profile: state.profiles.myProfile,
});

export default connect(mapStateToProps, { updateProfile })(UserDetails);
