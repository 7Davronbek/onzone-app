import axios from "axios";
import { API_PATH } from "../../tools/constants";
import { PRODUCT_UPDATESTATE } from "../types/product";

export const updateProducts = (state) => {
  return {
    type: PRODUCT_UPDATESTATE,
    payload: state,
  };
};

export const logs = () => async (dispatch) =>{
    
}

// const config = {
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "multipart/form-data",
//   },
// };

// GET ALL LIST CATEGORIES
export const getListCategory = () => async dispatch => {
    await axios.get(API_PATH + `/uz/product/list-type-category/`)
        .then((res) => {
            console.log(res);
            dispatch(updateProducts({listCategories: res.data.results}))
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getCategory = () => async dispatch => {
    await axios.get(API_PATH + `/uz/product/list-category/`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}



















