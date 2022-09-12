import { PRODUCT_UPDATESTATE } from "../types/product";

const initialState = {
  isLoading: false,
  error: false,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_UPDATESTATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
