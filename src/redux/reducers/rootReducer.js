import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer
});
