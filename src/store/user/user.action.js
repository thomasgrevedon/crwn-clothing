import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reduce/reduce";
import { POSSIBLE_ACTIONS } from "./user.types";

export const setCurrentUser = (user) => {
  return createAction(POSSIBLE_ACTIONS.SET_CURRENT_USER, user);
};

export const signInWithSuccess = (user) => {
  return createAction(POSSIBLE_ACTIONS.SIGN_IN_SUCCESS, user);
};

export const signInFailed = (error) => {
  return createAction(POSSIBLE_ACTIONS.SIGN_IN_FAILED, error);
};

export const signUp = (email, password, displayName) => {
  return createAction(POSSIBLE_ACTIONS.SIGN_UP_START, { email: email, password: password, displayName: displayName });
};

export const signUpFailed = (error) => {
  return createAction(POSSIBLE_ACTIONS.SIGN_IN_FAILED, error);
};

export const checkUserAuthentication = () => {
  return createAction(POSSIBLE_ACTIONS.CHECK_USER_SESSION);
};

export const signInWithEmail = (email, password) => {
  //if (!email || !password) return;
  //await signInWithEmailAndPassword(auth, email, password);
  return createAction(POSSIBLE_ACTIONS.CHECK_USER_SESSION);
};

export const signUpSucess = (user, additionalInformation) => {
  return createAction(POSSIBLE_ACTIONS.SIGN_UP_SUCCESS, { user, additionalInformation });
};

export const signingInWitgGoogle = () => {
  return createAction(POSSIBLE_ACTIONS.SIGN_IN_WITH_GOOGLE_START);
};

export const signOutSuccess = () => {
  return createAction(POSSIBLE_ACTIONS.SIGN_OUT_SUCCESS);
};

export const sigingOut = () => {
  return createAction(POSSIBLE_ACTIONS.SIGN_OUT_START);
};

export const sigingOutFailed = (error) => {
  return createAction(POSSIBLE_ACTIONS.SIGN_OUT_FAILED, error);
};

export const signingInWithEmailAndPassword = (email, password) => {
  return createAction(POSSIBLE_ACTIONS.SIGN_IN_WITH_EMAIL_START, { email: email, password: password });
};
