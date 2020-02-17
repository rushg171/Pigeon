import PROCEDURE from "../constants";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case PROCEDURE.LOAD:
      return true;
    case PROCEDURE.LOAD_SUCCESS:
      return false;
    case PROCEDURE.LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
