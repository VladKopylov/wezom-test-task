import { combineReducers } from "redux";

import { users } from "./reducers/users";
import { filter } from "./reducers/filter";

export default combineReducers({
  users,
  filter,
});
