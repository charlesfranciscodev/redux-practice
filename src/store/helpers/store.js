import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';


import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../saga/contacts";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  )
);

sagaMiddleware.run(rootSaga);
