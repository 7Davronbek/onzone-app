import { USER_EMAIL, USER_TOKEN } from "../../tools/constants";
import { UPDATESTATE } from "../types/auth";

const initialState = {
  isLoading: false,
  error: false,
  userToken: localStorage.getItem(USER_TOKEN) || null,
  userEmail: localStorage.getItem(USER_EMAIL) || null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATESTATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
