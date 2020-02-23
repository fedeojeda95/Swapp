import categories from 'constants/categories';
import { combineReducers } from 'redux';
import error from './ErrorReducer';
import status from './StatusReducer';
import createElementReducer from './ElementsReducer';

const reducers = {
  error,
  status,
};

categories.forEach((category) => {
  reducers[category.apiName] = createElementReducer(category.apiName);
});

export default combineReducers(reducers);
