import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reduce/reduce";
import { POSSIBLE_ACTIONS } from "./categories.types";

export const startFetchingCategory = () => {
  return createAction(POSSIBLE_ACTIONS.SET_CATEGORIES_START);
};

export const populateCategoryOnSucess = (categoryArray) => {
  return createAction(POSSIBLE_ACTIONS.SET_CATEGORIES_SUCCESS, categoryArray);
};

export const setErrorOnFail = (error) => {
  return createAction(POSSIBLE_ACTIONS.SET_CATEGORIES_ERROR, error);
};

export const fetchCategoryAsync = () => {
  return async (dispatch) => {
    dispatch(startFetchingCategory());
    try {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(populateCategoryOnSucess(categoriesArray));
    } catch (error) {
      dispatch(setErrorOnFail(error));
    }
  };
};
