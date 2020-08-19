import { MY_EXPERIENCE } from "../actions/types";

const initialState = {
  myExpe: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MY_EXPERIENCE:
      return {
        ...state,
        myExpe: action.payload,
      };
    default:
      return state;
  }
}
