import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPost } from "../../actions/posts";
import img from "../img/showcase.jpg";

export class Posts extends Component {
  static propTypes = {
    fetchPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
  };
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <div className="title">
              <div className="author-dp"></div>
              <div className="author-info">
                <h4 className="author-username">{post.author}</h4>
                {post.profession && post.company ? (
                  <p className="author-proffesion">
                    {post.profession} at {post.company}
                  </p>
                ) : (
                  ""
                )}

                <p className="date-posted">{post.date_updated}</p>
              </div>
            </div>
            <p className="post-body">{post.body}</p>
            {post.image ? (
              <div className="post-image">
                <img src={img} />
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { fetchPost })(Posts);
