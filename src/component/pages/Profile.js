import React, { Component } from "react";
import Navbar from "../layouts/Navbar";
import Experience from "../layouts/Experience";
import Education from "../layouts/Education";
import UserDetails from "../layouts/UserDetails";

export class Profile extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="profile-page">
          <div>
            <UserDetails />
            <Experience />
            <Education />
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
