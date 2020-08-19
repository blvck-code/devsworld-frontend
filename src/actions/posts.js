import { FETCH_POSTS, CREATE_POST } from "./types";
import axios from "axios";
import { tokenConfig } from "./auth";

//FETCH_POSTS
export const fetchPost = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/posts/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: FETCH_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log("ERROR", err));
};

//CREATE POSTS
export const createPost = ({ body, image }) => (dispatch, getState) => {
  const post = JSON.stringify({ body, image });

  axios
    .post("http://localhost:8000/api/posts/create", post, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CREATE_POST,
        payload: res.data,
      });
    })
    .catch((err) => console.log("ERROR", err));
};
