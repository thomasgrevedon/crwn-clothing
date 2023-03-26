import { createAction } from "../../utils/reduce/reduce";
import { POSSIBLE_ACTIONS } from "./user.types";

export const setCurrentUser = (user) => {
  return createAction(POSSIBLE_ACTIONS.SET_CURRENT_USER, user);
};
