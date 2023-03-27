import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const myLogger = (state) => (next) => (actions) => {
    console.log("State before");
    console.log(actions.type);
    console.log(actions.payload);
    console.log(state.getState());

    next(actions);
    console.log("State After");
    console.log(state.getState());


}

const middleWares = [myLogger];
const composedEnhances = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhances);
