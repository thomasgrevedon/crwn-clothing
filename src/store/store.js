import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
 import logger from "redux-logger";
 import { persistStore, persistReducer } from "redux-persist";
 import storage from "redux-persist/lib/storage";
//  import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";

import { rootSaga } from "./root-saga";

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
   whitelist: ["cart"],

 };

 const persistedReducer = persistReducer(persistconfiguration, rootReducer);

 const sagaMiddleware = createSagaMiddleware()

 const middleWares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(Boolean);

const composedEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhances = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhances);
sagaMiddleware.run(rootSaga)
export const persistedStore = persistStore(store);