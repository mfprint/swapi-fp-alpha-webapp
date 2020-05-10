import swAPI from '../APIs/swAPI';

export const fetchStarshipsList = () => {
    return async (dispatch, getState) => {
        var { film } = getState();

        for (var starship of film.starships) {
            dispatch(fetchStarshipItem(starship));
        }
    }
}

export const fetchStarshipItem = (starshipUrl) => {
    return async (dispatch, getState) => {
        var response = await swAPI.get(starshipUrl);
        console.log(response);

        dispatch({
            type: 'FETCH_STARSHIP_ITEM',
            payload: {
                starship: response.data
            }
        });
    }
}

export const fetchStarship = (starshipModel) => {
    return async (dispatch, getState) => {
        var response = await swAPI.get(`/starships/?search=${starshipModel}`);
        console.log({ star: response });

        dispatch({
            type: 'FETCH_STARSHIP',
            payload: {
                starship: response.data.results[0]
            }
        });
    }
}

export const emptyStarshipsList = () => {
    return {
        type: 'EMPTY_STARSHIPS_LIST',
    }
}