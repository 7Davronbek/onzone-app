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

// GET TYPECATEGORY
export const getTypeCategory = () => async (dispatch) => {
  await axios
    .get(API_PATH + "/product/list-type-category/")
    .then((res) => {
      dispatch(updateAdmin({ typeCategories: res.data.results }));
      console.log(res);
      //   console.log(res);
      //   setCategory(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE TYPECATEGORY
export const deleteTypeCategory = id => async (dispatch) => {
    await axios.delete(API_PATH + `/admins/rud-type-category/${id}/`)
        .then((res) => {
            console.log(res);
            dispatch(getTypeCategory())
        })
        .catch(err => {
            console.log(err);
        })
}

// UPDATE TYPECATEGORY
export const updateTypeCategory = id => async (dispatch) => {
    await axios.put(API_PATH + `/admins/rud-type-category/${id}/`, )
}

// export const postCategory = (e, name, nameRu, file) => async (dispatch) => {
//   e.preventDefault();

//   const formData = new FormData();
//   formData.append("image", file);
//   formData.append("name", name);
//   formData.append("name_ru", nameRu);

//   await axios
//     .post(API_PATH + "/admins/create-type-category/", formData, config)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const createCategory = (e, name, file) => async (dispatch) => {
//   e.preventDefault();

//   const formData = new FormData();
//   formData.append("name", name);
//   formData.append("image", file);
//   await axios
//     .post(API_PATH + "/admins/create-type-category/", formData, config)
//     .then((res) => {
//       //   console.log(res);
//       //   getCategry();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
