// src/reducers/root_reducer.js

import { combineReducers } from "redux";
import session from "./session_api_reducer";
import errors from "./errors_reducer";
import tweets from "./tweets_reducer";

const RootReducer = combineReducers({
  errors,
  session,
  tweets
});

export default RootReducer;
