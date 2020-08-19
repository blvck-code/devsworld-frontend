import { FETCH_POSTS, CREATE_POST, LOGOUT_SUCCESS } from "../actions/types";

const initialState = {
  posts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
}
