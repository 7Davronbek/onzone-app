import { UPDATEADMIN } from "../types/admin";

const initialState = {
  isLoading: false,
  error: false,
  typeCategories: [],
  categories: [],
  subCategories: [],
  brands: [],
  attributes: [],
  products: []
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATEADMIN:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
