import { POSSIBLE_ACTIONS } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case POSSIBLE_ACTIONS.SIGN_IN_SUCCESS:
      return { ...state, isLoading: false, currentUser: payload };
    case POSSIBLE_ACTIONS.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case POSSIBLE_ACTIONS.SIGN_IN_FAILED:
    case POSSIBLE_ACTIONS.SIGN_OUT_FAILED:
    case POSSIBLE_ACTIONS.SIGN_UP_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
