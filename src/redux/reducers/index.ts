import {combineReducers} from 'redux';

import postLoginRequestCasesReducer from './PostLoginRequestCasesReducer';

const rootReducer = combineReducers({
  postLoginRequestCasesReducer,
});

export default rootReducer;
