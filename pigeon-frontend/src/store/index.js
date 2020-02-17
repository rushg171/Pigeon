import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../sagas";

const saga = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(saga), composeWithDevTools())
);
saga.run(rootSaga);
// store.dispatch({ type: "PROCEDURE_DELETE", id: "5e4428f98ddbdc2f70fbee71" });

export default store;
