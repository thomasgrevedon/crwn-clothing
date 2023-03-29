import { call, all, takeLatest, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { populateCategoryOnSucess, setErrorOnFail } from "./categories.actions";
import { POSSIBLE_ACTIONS } from "./categories.types";

export function* fetchCategoryAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(populateCategoryOnSucess(categoriesArray));
  } catch (error) {
    yield put(setErrorOnFail(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(POSSIBLE_ACTIONS.SET_CATEGORIES_START, fetchCategoryAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
