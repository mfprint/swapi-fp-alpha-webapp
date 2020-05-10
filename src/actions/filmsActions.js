import swapi from "../APIs/swAPI";
import { emptyStarshipsList } from "./starshipsActions";

export const fetchFilmsList = () => {
    return async (dispatch, getState) => {
        try {
            var response = await swapi.get('/films/');
            console.log(response.data);

            dispatch({
                type: 'FETCH_FILMS_LIST',
                payload: {
                    filmsList: response.data.results
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
}

export const setFilm = (filmTitle) => {
    return async (dispatch, getState) => {
        try {
            var { filmsList } = getState();
            var film = filmsList.find(film => film.title === filmTitle) || null;
    
            dispatch({
                type: 'SET_FILM',
                payload: {
                    film
                }
            });
    
            dispatch(emptyStarshipsList());
        }
        catch (e) {
            console.log(e);
        }

        return Promise.resolve();
    }
}