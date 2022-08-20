import { UPDATEADMIN } from "../types/admin";
import axios from "axios";
import { API_PATH } from "../../tools/constants";

export const updateAdmin = (state) => {
  return {
    type: UPDATEADMIN,
    payload: state,
  };
};

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
};

export const getCategory = () => async (dispatch) => {
  await axios
    .get(API_PATH + "/product/list-type-category/")
    .then((res) => {
    //   console.log(res);
      dispatch(updateAdmin({categories: res.data.results}))
      //   setCategory(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createCategory = (e, formData) => async (dispatch) => {
  e.preventDefault();
  console.log(formData);

  await axios
    .post(API_PATH + "/admins/create-type-category/", formData, config)
    .then((res) => {
    //   console.log(res);
      //   getCategry();
    })
    .catch((err) => {
      console.log(err);
    });
};
