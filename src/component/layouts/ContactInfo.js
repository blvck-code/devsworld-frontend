import React, { Component } from "react";
import { connect } from "react-redux";
import EditContactModal from "./EditContactModal";

export class ContactInfo extends Component {
  openModal = (id) => {
    document.getElementById(id).style.display = "block";
  };

  closeModal = (id) => {
    document.getElementById(id).style.display = "none";
  };

  clickOutside = (e) => {
    this.update = false;
    if (e.target == document.getElementById("contactModal")) {
      document.getElementById("contactModal").style.display = "none";
    }
  };

  render() {
    const { user } = this.props;
    window.addEventListener("click", this.clickOutside);

    return (
      <>
        <div className="modal" id="editContactModal">
          <EditContactModal />
        </div>

        <div className="modal-content">
          <div className="modal-title">
            {user ? (
              <h2>
                {user.first_name} {user.last_name}
              </h2>
            ) : (
              ""
            )}
            <h1
              onClick={() => {
                this.closeModal("contactModal");
              }}
            >
              <i className="fa fa-close"></i>
            </h1>
          </div>
          <div className="modal-subtitle">
            <h2>Contact Info</h2>
            <div>
              <i
                className="fa fa-cogs"
                onClick={() => {
                  this.openModal("editContactModal");
                }}
              ></i>
            </div>
          </div>
          <div className="modal-body">
            <div className="contactModal">
              <div className="devsworld">
                <div className="icon">
                  <i className="fa fa-code"></i>
                </div>
                <div className="info">
                  <h3>Your Profile</h3>
                  {user ? <p>devsworld/in/{user.username}</p> : ""}
                </div>
              </div>
              <div className="github">
                <div className="icon">
                  <i className="fa fa-github"></i>
                </div>
                <div className="info">
                  <h3>Github</h3>
                  <p>oluoch</p>
                </div>
              </div>
              <div className="twitter">
                <div className="icon">
                  <i className="fa fa-twitter"></i>
                </div>
                <div className="info">
                  <h3>Twitter</h3>
                  <p>oluoch</p>
                </div>
              </div>
              <div className="email">
                <div className="icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="info">
                  <h3>Email</h3>
                  {user ? <p>{user.email}</p> : ""}
                </div>
              </div>
              <div className="dob">
                <div className="icon">
                  <i className="fa fa-birthday-cake"></i>
                </div>
                <div className="info">
                  <h3>Birthday</h3>
                  <p>November 25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ContactInfo);
