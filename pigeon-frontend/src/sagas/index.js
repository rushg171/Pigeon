import PROCEDURE from "../constants";
import { all, takeEvery, call, put } from "redux-saga/effects";
import { setProcedure, setError } from "../actions";
import fetchData from "./fetchData";
import deleteById from "./delete";

function* procedureGet() {
  try {
    yield console.log("loadingData");
    const data = yield call(fetchData);
    yield put(setProcedure(data));
  } catch (e) {
    yield console.log(e);
    yield put(setError(e));
  }
}

function* procedureDelete(id) {
  try {
    yield console.log("Deleting Procedure");
    console.log({ id: id.payload });
    const data = yield call(deleteById, { id: id.payload });
    console.log(data);
    yield call(procedureGet);
  } catch (e) {
    yield console.log(e);
    yield put(setError(e));
  }
}

function* rootSaga() {
  console.log("root gen");
  yield all([
    takeEvery(PROCEDURE.LOAD, procedureGet),
    takeEvery(PROCEDURE.DELETE, procedureDelete)
  ]);
}
export default rootSaga;
