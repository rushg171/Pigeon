import { combineReducers } from "redux";
import deleteByIdReducer from "./delete";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import successReducer from "./successReducer";

const rootReducer = combineReducers({
  error: errorReducer,
  loading: loadingReducer,
  success: successReducer,
  deleteById: deleteByIdReducer
});

export default rootReducer;
