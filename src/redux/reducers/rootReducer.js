import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { authReducer } from "./authReducer";
import { productsReducer } from "./productsReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  products: productsReducer
});
