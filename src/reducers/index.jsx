
/**
 * NOTE:
 * In combineReducers the routerReducer needs to have
 * a key of 'router'
 */
import { combineReducers }          from 'redux';
import { routerReducer as router }  from 'react-router-redux';
import activeModule                 from './base';
import ssr                          from '../modules/Home';

const rootReducer = combineReducers({
  activeModule,
  ssr
});

export default rootReducer;
