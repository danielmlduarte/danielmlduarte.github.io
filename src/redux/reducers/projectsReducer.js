import {
  LIST_PROJECTS,
  REQUEST_FAILED,
  REQUEST_PROJECTS,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  list: '',
  error: '',
};

function projectsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LIST_PROJECTS:
    return { ...state, list: action.list, isFetching: false };
  case REQUEST_FAILED:
    return { ...state, error: action.error };
  case REQUEST_PROJECTS:
    return { ...state, isFetching: true };
  default:
    return state;
  }
}

export default projectsReducer;
