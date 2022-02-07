import {combineReducers,createStore} from 'redux';
import {pageInfo} from './reducers';

const globalReducer = combineReducers({pageInfo:pageInfo});
const store = createStore(globalReducer);

export default store;