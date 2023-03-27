import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const myLogger = (state) => (next) => (actions) => {
  console.log("State before");
  console.log(actions.type);
  console.log(actions.payload);
  console.log(state.getState());

  next(actions);
  console.log("State After");
  console.log(state.getState());
};

const persistconfiguration = {
  key: "root",
  storage,
  BlackList: ["user"],
};

const persistedReducer = persistReducer(persistconfiguration, rootReducer);

const middleWares = [process.env.NODE_ENV !== "production" && myLogger].filter(Boolean);

const composedEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhances = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhances);
export const persistedStore = persistStore(store);