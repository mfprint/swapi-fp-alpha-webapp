import swapi from "../APIs/swAPI";
import { fetchStarship } from "./starshipsActions";

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
        var { filmsList } = getState();
        var film = filmsList.find(film => film.title === filmTitle) || null;

        dispatch({
            type: 'SET_FILM',
            payload: {
                film
            }
        });

        for (var starship of film.starships) {
            dispatch(fetchStarship(starship));
        }
    }
}