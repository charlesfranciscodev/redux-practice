import { combineReducers } from "redux";

import { contacts } from "./contacts.reducer";

const rootReducer = combineReducers({
  contacts
});

export default rootReducer;
