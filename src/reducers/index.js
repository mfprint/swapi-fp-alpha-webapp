import { combineReducers } from 'redux';
import { filmsListReducer } from './filmsReducers';

export default combineReducers({
    filmsList: filmsListReducer
});