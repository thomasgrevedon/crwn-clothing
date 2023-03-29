import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { call, all, takeLatest, put, take } from "redux-saga/effects";
import { auth, createUserDocumentFromAuth, getCurrentUser, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import { signInWithSuccess, signInFailed, signUpFailed, signUpSucess, signOutSuccess, sigingOutFailed } from "./user.action";
import { POSSIBLE_ACTIONS } from "./user.types";

export function* generateOrGetDocument(authUser, additionalInformation) {
  try {
    const userSnapShot = yield call(createUserDocumentFromAuth, authUser, additionalInformation);
    console.log(userSnapShot.data());
    console.log(authUser);

    yield put(signInWithSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const authUser = yield call(getCurrentUser);
    if (!authUser) return;
    yield call(generateOrGetDocument, authUser);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onSignInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(isUserAuthenticated);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onSignInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInWithEmailAndPassword, auth, email, password);
    yield call(isUserAuthenticated);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail() {
  yield takeLatest(POSSIBLE_ACTIONS.SIGN_IN_WITH_EMAIL_START, onSignInWithEmail);
}

export function* signUpWithGoogle() {
  yield takeLatest(POSSIBLE_ACTIONS.SIGN_IN_WITH_GOOGLE_START, onSignInWithGoogle);
}

export function* onSignUp({ payload: { email, password, displayname } }) {
  try {
    const { user } = yield call(createUserWithEmailAndPassword, auth, email, password);
    yield put(signUpSucess(user, displayname));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signingUp() {
  yield takeLatest(POSSIBLE_ACTIONS.SIGN_UP_START, onSignUp);
}

export function* onCheckUserSession() {
  yield takeLatest(POSSIBLE_ACTIONS.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignInSuccess({ user, displayname }) {
  yield call(generateOrGetDocument, user, displayname);
}

export function* signInSuccess() {
  yield takeLatest(POSSIBLE_ACTIONS.SIGN_UP_SUCCESS, onSignInSuccess);
}

export function* onSigningOut() {
  try {
    yield call(signOut, auth);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(sigingOutFailed(error));
  }
}

export function* signingOut() {
  yield takeLatest(POSSIBLE_ACTIONS.SIGN_OUT_START, onSigningOut);
}

export function* userSaga() {
  yield all([call(onCheckUserSession), call(signUpWithGoogle), call(signInWithEmail), call(signingUp), call(signingOut)]);
}
