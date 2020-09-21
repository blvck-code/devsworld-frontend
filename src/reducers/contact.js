import {
  MY_CONTACT,
  UPDATE_CONTACT,
  LOGOUT_SUCCESS,
  DEV_CONTACT,
} from "../actions/types";

const initialState = {
  myContact: {},
  devContact: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MY_CONTACT:
      return {
        ...state,
        myContact: action.payload,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        myContact: action.payload,
      };
    case DEV_CONTACT:
      return {
        ...state,
        devContact: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        myContact: {},
      };
    default:
      return state;
  }
}
