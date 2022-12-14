import { UPDATEADMIN } from "../types/admin";
import axios from "axios";
import { API_PATH } from "../../tools/constants";

export const updateAdmin = (state) => {
  return {
    type: UPDATEADMIN,
    payload: state,
  };
};

// const config = {
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "multipart/form-data",
//   },
// };

// GET TYPECATEGORY
export const getTypeCategory = () => async (dispatch) => {
  await axios
    .get(API_PATH + "/product/list-type-category/")
    .then((res) => {
      dispatch(updateAdmin({ typeCategories: res.data.results }));
      // console.log(res);
      //   console.log(res);
      //   setCategory(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE TYPECATEGORY
export const deleteTypeCategory = (id) => async (dispatch) => {
  await axios
    .delete(API_PATH + `/admins/rud-type-category/${id}/`)
    .then((res) => {
      console.log(res);
      dispatch(getTypeCategory());
    })
    .catch((err) => {
      console.log(err);
    });
};

// UPDATE TYPECATEGORY
export const updateTypeCategory = (id) => async (dispatch) => {
  await axios.put(API_PATH + `/admins/rud-type-category/${id}/`);
};

// GET ALL CATEGORIES
export const getCategries = () => async (dispatch) => {
  await axios
    .get(API_PATH + `/product/list-category`)
    .then((res) => {
      dispatch(updateAdmin({ categories: res.data.results }));
      // console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE CATEGORY BY ID
export const deleteCategory = (id) => async (dispatch) => {
  await axios
    .delete(API_PATH + `/admins/rud-category/${id}/`)
    .then((res) => {
      dispatch(getCategries());
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

// GET ALL SUB_CATEGORIES
export const getSubCategories = () => async (dispatch) => {
  await axios
    .get(API_PATH + `/product/list-subcategory/`)
    .then((res) => {
      dispatch(updateAdmin({ subCategories: res.data.results }));
      // console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE SUB_CATEGORY BY ID
export const deleteSubCategory = (id) => async (dispatch) => {
  await axios
    .delete(API_PATH + `/admins/rud-subcategory/${id}/`)
    .then((res) => {
      dispatch(getSubCategories());
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

// GET ALL BRANDS
export const getBrands = () => async (dispatch) => {
  await axios
    .get(API_PATH + `/product/list-brand/`)
    .then((res) => {
      dispatch(updateAdmin({ brands: res.data.results }));
    })
    .catch((err) => {
      console.log(err);
    });
};

// DE:ETE BRAND BY ID
export const deleteBrand = (id) => async (dispatch) => {
  await axios
    .delete(API_PATH + `/product/rud-brand/${id}/`)
    .then((res) => {
      dispatch(getBrands());
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

// GET ALL ATTRIBUTES
export const getAttributes = () => async (dispatch) => {
  await axios
    .get(API_PATH + `/product/list-attribute/`)
    .then((res) => {
      // console.log(res);
      dispatch(updateAdmin({ attributes: res.data.results }));
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE ATTRIBUTE BY ID
export const deleteAttribute = (id) => async (dispatch) => {
  await axios
    .delete(API_PATH + `/admins/rud-attribute/${id}/`)
    .then((res) => {
      dispatch(getAttributes());
    })
    .catch((err) => {
      console.log(err);
    });
};

// GET ALL PRODUCTS
export const getProducts = () => async (dispatch) => {
  await axios
    .get(API_PATH + `/product/list-product/`)
    .then((res) => {
      dispatch(updateAdmin({ products: res.data.results }));
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE PRODUCT BY ID
export const deleteProduct = (id) => async (dispatch) => {
  await axios
    .delete(API_PATH + `/admins/rud-product/${id}/`)
    .then((res) => {
      dispatch(getProducts());
    })
    .catch((err) => {
      console.log(err);
    });
};


























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
