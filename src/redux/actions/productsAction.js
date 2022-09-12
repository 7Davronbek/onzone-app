import axios from "axios";
import { API_PATH } from "../../tools/constants";
import { PRODUCT_UPDATESTATE } from "../types/product";

export const updateProducts = (state) => {
  return {
    type: PRODUCT_UPDATESTATE,
    payload: state,
  };
};

export const logs = () => {
    console.log('qwe');
}

// const config = {
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "multipart/form-data",
//   },
// };
