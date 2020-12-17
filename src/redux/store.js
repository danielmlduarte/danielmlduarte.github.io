import { createStore, combineReducers, applyMiddleware } from 'redux';
import projectsReducer from './reducers/projectsReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ projectsReducer });

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;