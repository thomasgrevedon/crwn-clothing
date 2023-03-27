import { createAction } from "../../utils/reduce/reduce";
import { POSSIBLE_ACTIONS } from "./categories.types";

export const setCategoriesArray = (categoriesArray) => {
  return createAction(POSSIBLE_ACTIONS.SET_CATEGORIES, categoriesArray);
};
