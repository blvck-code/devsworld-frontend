import {
  MY_EXPERIENCE,
  UPDATE_EXPERIENCE,
  CREATE_EXPERIENCE,
  GET_ERRORS,
  DEV_EXPERIENCE,
} from "./types";
import axios from "axios";
import { tokenConfig } from "./auth";
import { createMessage } from "./messages";
import baseUrl from './url'

// USER EXEPRIENCE
export const myExpe = () => (dispatch, getState) => {
  axios
    .get(
      `${baseUrl}/api/experience/user-experience`,
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

// DEVELOPER EXEPRIENCE
export const developerExpe = (slug) => (dispatch, getState) => {
  axios
    .get(`${baseUrl}/api/experience${slug}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DEV_EXPERIENCE,
        payload: res.data,
      });
    })
    .catch((err) => console.log("ERROR", err));
};

// UPDATE EXPERIENCE
export const updateExpe = (id, { job,
  employment_type,
  start,
  end,
  company,
  location,
  description }) => (dispatch, getState) => {
  const body = JSON.stringify({
    job,
    employment_type,
    start,
    end,
    company,
    location,
    description});

  axios
    .put(
      `${baseUrl}/api/experience/${id}/update`,
      body,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: UPDATE_EXPERIENCE,
        payload: res.data,
      });
    })
    .catch((err) => console.log("ERROR", err));
};

// CREATE EXPERIENCE
export const createExpe = ({
  job,
  employment_type,
  start,
  end,
  company,
  location,
  description,
}) => (dispatch, getState) => {
  const body = JSON.stringify({
    job,
    employment_type,
    start,
    end,
    company,
    location,
    description,
  });

  axios
    .post(
      `${baseUrl}/api/experience/create`,
      body,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch(createMessage({ expeAdded: "Experience Added" }));
      dispatch({
        type: CREATE_EXPERIENCE,
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
