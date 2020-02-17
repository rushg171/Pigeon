import PROCEDURE from "../constants";

const loadProcedure = () => ({
  type: PROCEDURE.LOAD
});

const setProcedure = procedure => ({
  type: PROCEDURE.LOAD_SUCCESS,
  payload: procedure
});

const setError = error => ({
  type: PROCEDURE.LOAD_FAIL,
  error
});

const deleteById = id => ({
  type: PROCEDURE.DELETE,
  payload: id
});

export { loadProcedure, setProcedure, setError, deleteById };
