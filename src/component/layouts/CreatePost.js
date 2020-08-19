import React, { Component } from "react";
import img from "../img/showcase.jpg";
import { connect } from "react-redux";
import { createPost } from "../../actions/posts";

class CreatePost extends Component {
  state = {
    body: "",
    file: null,
  };

  resetState = () => {
    this.setState({
      body: "",
      file: null,
    });
  };
  openModal = () => {
    document.getElementById("createModal").style.display = "block";
  };

  closeModal = () => {
    this.resetState();
    document.getElementById("createModal").style.display = "none";
  };

  clickOutside = (e) => {
    if (e.target == document.getElementById("createModal")) {
      document.getElementById("createModal").style.display = "none";
      this.resetState();
    }
  };

  onChange = (e) => this.setState({ body: e.target.value });

  readURL = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      this.setState({
        file: e.target.result,
      });
    };

    // let formData = new FormData();
    // formData.append("image", this.state.file, this.state.file.name);
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    window.addEventListener("click", this.clickOutside);

    const { body, file } = this.state;

    return (
      <>
        <form className="card">
          <div className="create-post">
            <i className="fa fa-edit"></i>
            <input
              type="text"
              name="body"
              onFocus={this.openModal}
              placeholder="Start a post"
            />
          </div>
          <div className="postIcon">
            <p>
              <i className="fa fa-camera"></i> Photo
            </p>
            <p>
              <i className="fa fa-video-camera"></i> Video
            </p>
            <p>
              <i className="fa fa-file"></i> Document
            </p>
          </div>
        </form>
        <div id="createModal" className="modal">
          <div className="modal-content">
            <form method="post" onSubmit={this.onSubmit} type="post">
              <div className="modal-title">
                <h2>Create a post</h2>
                <h1>
                  <i className="fa fa-close" onClick={this.closeModal}></i>
                </h1>
              </div>
              <div className="modal-body">
                <div className="createModal">
                  <div className="form-group">
                    <textarea
                      placeholder="What do you want to talk about?"
                      value={body}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group image-group" id="id_image_group">
                    <img
                      className="img-fluid image"
                      src={file}
                      id="id_image_display"
                      onClick={() => this.fileInput.click()}
                    />
                    <div className="middle">
                      <i
                        className="fa fa-camera"
                        name="image"
                        id="id_image_file"
                        onClick={() => this.fileInput.click()}
                      ></i>
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="file"
                      name="image"
                      style={{ display: "none" }}
                      id="id_image_file"
                      accept="image/*"
                      onChange={this.readURL}
                      ref={(fileInput) => (this.fileInput = fileInput)}
                    />
                  </div>
                </div>
              </div>
              <button type="submit">Post</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default connect(null, { createPost })(CreatePost);
