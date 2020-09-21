import {
  MY_EXPERIENCE,
  DEV_EXPERIENCE,
  CREATE_EXPERIENCE,
  LOGOUT_SUCCESS,
} from "../actions/types";

const initialState = {
  myExpe: [],
  devExpe: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MY_EXPERIENCE:
      return {
        ...state,
        myExpe: action.payload,
      };
    // case UPDATE_EXPERIENCE:
    //   return {
    //     ...state,
    //     myExpe: [...state.myExpe, action.payload],
    //   };
    case CREATE_EXPERIENCE:
      return {
        ...state,
        myExpe: [...state.myExpe, action.payload],
      };
    case DEV_EXPERIENCE:
      return {
        ...state,
        devExpe: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        myExpe: [],
      };
    default:
      return state;
  }
}
