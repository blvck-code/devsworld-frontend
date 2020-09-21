import { act } from "react-dom/test-utils";
import {
  FETCH_POSTS,
  CREATE_POST,
  LOGOUT_SUCCESS,
  DELETE_POST,
  SEARCH_ITEM
} from "../actions/types";

const initialState = {
  loading: false,
  posts: [],
  count: "",
  next: null,
  isSearchActive: false,
  foundPosts: [],
  previous: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload.results,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
      };
    case SEARCH_ITEM:
      const searchValue = action.payload.toLowerCase();
      return {
        ...state,
        isSearchActive: action.payload.length > 0 || false,
        foundPosts: state.posts.filter(item => {
          return item.body.toLowerCase().search(searchValue) !== -1 ||
          item.author.toLowerCase().search(searchValue) !== -1
        })
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case LOGOUT_SUCCESS:
      return {
        posts: [],
        count: "",
        next: null,
        previous: null,
      };
    default:
      return state;
  }
}
