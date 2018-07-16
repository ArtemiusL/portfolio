import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import common from './common';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  common,
});

export default rootReducer;
