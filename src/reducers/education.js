import {
  MY_EDUCATION,
  ADD_EDUCATION,
  LOGOUT_SUCCESS,
  DEV_EDUCATION,
} from "../actions/types";

const initialState = {
  myEdu: [],
  devEdu: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MY_EDUCATION:
      return {
        ...state,
        myEdu: action.payload,
      };
    case DEV_EDUCATION:
      return {
        ...state,
        devEdu: action.payload,
      };
    case ADD_EDUCATION:
      return {
        ...state,
        myEdu: [...state.myEdu, action.payload],
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        myEdu: [],
      };
    default:
      return state;
  }
}
