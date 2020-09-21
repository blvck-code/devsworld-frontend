import { FETCH_POSTS, CREATE_POST, GET_ERRORS, DELETE_POST } from "./types";
import { createMessage } from "./messages";
import axios from "axios";
import { tokenConfig } from "./auth";
import baseUrl from './url';

//FETCH_POSTS
export const fetchPost = () => (dispatch, getState) => {
  axios
    .get(`${baseUrl}/api/posts/?`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: FETCH_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      const error = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};

//CREATE POSTS
export const createPost = ({ body, image }) => (dispatch, getState) => {
  const post = JSON.stringify({ body, image });

  axios
    .post(`${baseUrl}/api/posts/create`, post, tokenConfig(getState))
    .then((res) =>{
      dispatch({
        type: CREATE_POST,
        payload: res.data,
      });
      dispatch(createMessage({ postAdded: "Posts Added" }));
      fetchPost()
    })
    .catch((err) => {
      const error = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};

// DELETE POST
export const deletePost = (id) => (dispatch, getState) => {
  axios
    .delete(
      `${baseUrl}/api/posts/${id}/delete`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch(createMessage({ postDelete: "Posts Deleted" }));
      dispatch({
        type: DELETE_POST,
        payload: id,
      });
    })
    .catch((err) => {
      const error = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};
