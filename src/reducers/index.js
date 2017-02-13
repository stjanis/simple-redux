// Set up your root reducer here...
import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading
});