import { MY_PROFILE, UPDATE_PROFILE, LOGOUT_SUCCESS } from "../actions/types";

const initialState = {
  myProfile: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MY_PROFILE:
      return {
        ...state,
        myProfile: action.payload,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        myProfile: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        myProfile: null,
      };
    default:
      return state;
  }
}
