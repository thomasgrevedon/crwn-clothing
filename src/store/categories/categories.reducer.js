import { POSSIBLE_ACTIONS } from "./categories.types";

const INITIAL_STATE = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log("///////////////");
  console.log(state);
  switch (type) {
    case POSSIBLE_ACTIONS.SET_CATEGORIES_START:
      return { ...state, isLoading: true };
    case POSSIBLE_ACTIONS.SET_CATEGORIES_SUCCESS:
      return { ...state, categoriesArray: payload, isLoading: false };
    case POSSIBLE_ACTIONS.SET_CATEGORIES_ERROR:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
