import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPost, deletePost } from "../../actions/posts";
import img from "../img/showcase.jpg";
import person from "../img/default.png";
import Spinner from "./Spinner";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import {searchItem} from '../../actions/search';

export class Posts extends Component {
  static propTypes = {
    fetchPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
  };

  state = {
    image: null,
  };

  openModal = () => {
    document.getElementById("imgModal").style.display = "block";
  };

  closeModal = () => {
    document.getElementById("imgModal").style.display = "none";
  };

  clickOutside = (e) => {
    if (e.target === document.querySelector("#imgModal")) {
      document.getElementById("imgModal").style.display = "none";
    } else if (e.target === document.querySelector(".imageModal")) {
      document.getElementById("imgModal").style.display = "none";
    }
  };

  imgModal = (img) => {
    this.openModal();
    this.setState({
      image: img,
    });
  };

  deletePost = (id) => {
    this.props.deletePost(id);
  };

  reloadPost = () => {
    this.props.fetchPost();
  };

  componentWillMount(){
    this.props.fetchPost();
  }

  componentDidMount(){
    this.props.fetchPost();
  }

  render() {
    const { items, user } = this.props;
    console.log(items.posts.length);
    const posts = items.isSearchActive ? items.foundPosts : items.posts

    window.addEventListener("click", this.clickOutside);
    window.addEventListener('scroll', this.fetchPosts)
    return (
      <>
        <div className="modal" id="imgModal">
          <div className="imageModal">
            <div>
              <img src={this.state.image} />
            </div>
            <i onClick={this.closeModal} className="fa fa-close"></i>
          </div>
        </div>
        <div className="posts">
        {posts.length === 0 ? <h2>No posts found</h2>:""}

          {posts === undefined ||
          posts === null ||
          posts ==="" ? (
            <Spinner />
          ) : (
            <>
              {posts.map((post, i) => (
                <div key={i} className="card post-item">
                  {!post.author ? (
                    <>
                      <Spinner />
                      {this.reloadPost()}
                    </>
                  ) : (
                    <>
                      <div className="title">
                        <div className="author-dp">
                          <Link to={`/developers/${post.profile}`}>
                            {post.dp ? (
                              <img src={post.dp} alt={`${post.author}'Dp`} />
                            ) : (
                              <>
                                <img src={person} alt={`${post.author}'Dp`} />
                              </>
                            )}
                          </Link>
                        </div>
                        <div className="author-info">
                          <div>
                            <Link to={`/developers/${post.profile}`}>
                              <h4 className="author-username">{post.author}</h4>
                            </Link>
                            {post.profession ? (
                              <p className="author-proffesion">
                                {post.profession}
                              </p>
                            ) : (
                              ""
                            )}

                            <small className="date-posted">
                              <Moment start="day" fromNow>
                                {post.date_updated}
                              </Moment>{" "}
                              <i className="fa fa-globe"></i>
                            </small>
                          </div>
                          {post.profile === user.slug ? (
                            <div className="post-menu">
                              <button
                                onClick={() => {
                                  this.deletePost(post.id);
                                }}
                                className="btn btn-dark"
                              >
                                Delete post
                              </button>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <p className="post-body">{post.body}</p>
                      {post.image ? (
                        <div className="post-image">
                          <img
                            src={post.image}
                            onClick={() => {
                              this.imgModal(post.image);
                              // alt = `${post.author}'s Image Post`
                            }}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.posts,
  user: state.profiles.myProfile,
});

export default connect(mapStateToProps, { fetchPost, deletePost, searchItem })(Posts);
