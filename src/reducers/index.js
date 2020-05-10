import { combineReducers } from 'redux';
import { filmsListReducer, filmReducer } from './filmsReducers';
import { starshipsListReducer, starshipReducer } from './starshipsReducers';

export default combineReducers({
    filmsList: filmsListReducer,
    film: filmReducer,
    starshipsList: starshipsListReducer,
    starship: starshipReducer
});