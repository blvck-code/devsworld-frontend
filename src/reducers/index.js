import { combineReducers } from "redux";
import auth from "./auth";
import posts from "./posts";
import profiles from "./profiles";
import experience from "./experience";
import education from "./education";

export default combineReducers({
  auth,
  profiles,
  posts,
  experience,
  education,
});
