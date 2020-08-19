import { MY_EXPERIENCE } from "./types";
import axios from "axios";
import { tokenConfig } from "./auth";

// USER EXEPRIENCE
export const myExpe = () => (dispatch, getState) => {
  axios
    .get(
      "http://127.0.0.1:8000/api/experience/user-experience",
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: MY_EXPERIENCE,
        payload: res.data,
      });
    })
    .catch((err) => console.log("ERROR", err));
};
