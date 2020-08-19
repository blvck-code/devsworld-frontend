import React, { Component } from "react";
import { Link } from "react-router-dom";

export class EditContactModal extends Component {
  clickOutside = (e) => {
    this.update = false;
    if (e.target == document.getElementById("editContactModal")) {
      document.getElementById("editContactModal").style.display = "none";
    }
  };

  closeModal = (id) => {
    this.update = false;
    document.getElementById(id).style.display = "none";
  };
  render() {
    window.addEventListener("click", this.clickOutside);
    return (
      <>
        <div className="modal-content">
          <form type="post">
            <div className="modal-title">
              <h2>Edit contact info</h2>
              <h1>
                <i
                  className="fa fa-close"
                  onClick={() => this.closeModal("editContactModal")}
                ></i>
              </h1>
            </div>
            <div className="modal-body">
              <div className="editContactModal">
                <div className="form-group">
                  <label htmlFor="job">Profile URL</label>
                  <p>
                    <Link to="/">
                      devsworld/in/maurice-brian-oluoch117{" "}
                      <i className="fa fa-external-link"></i>
                    </Link>
                  </p>
                </div>
                <div className="form-group">
                  <label htmlFor="job">Website URL</label>
                  <div className="group-input">
                    <input />
                    <select>
                      <option value="">-</option>
                      <option>Personal</option>
                      <option>Company</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="job">Phone</label>
                  <div className="group-input">
                    <input />
                    <select>
                      <option value="">-</option>
                      <option>Home</option>
                      <option>Mobile</option>
                      <option>Office</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="job">Address</label>
                  <textarea />
                </div>
                <div className="form-group">
                  <label htmlFor="job">Email address</label>
                  <p>
                    <Link to="/">
                      admin@example.com <i className="fa fa-paper-plane-o"></i>
                    </Link>
                  </p>
                </div>
                <div className="form-group">
                  <label htmlFor="job">Birthday</label>
                  <div className="dateInput">
                    <div className="group-input">
                      <select>
                        <option value="">Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      <select>
                        <option value="">Day</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-modal">
                Save
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default EditContactModal;
