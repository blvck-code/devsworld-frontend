import { MY_PROFILE, UPDATE_PROFILE } from "./types";
import { tokenConfig } from "./auth";
import axios from "axios";

// GET USER PROFILE
export const myProfile = () => (dispatch, getState) => {
  axios
    .get(
      "http://127.0.0.1:8000/api/profile/user-profile",
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: MY_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) => console.log("ERROR", err));
};

//UPDATE PROFILE
export const updateProfile = (id, { data }) => (dispatch, getState) => {
  const profile = JSON.stringify({ data });
  axios
    .put(
      `http://127.0.0.1:8000/api/profile/${id}/update`,
      profile,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) => console.log("ERROR", err));
};
