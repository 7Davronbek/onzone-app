import { UPDATESTATE } from "../types/auth";

const initialState = {
  isLoading: false,
  error: false,
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
