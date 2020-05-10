import swAPI from '../APIs/swAPI';
import baseAPI from '../APIs/baseAPI';

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
        try {
            var response = await swAPI.get(`/starships/?search=${starshipModel}`);
    
            dispatch({
                type: 'FETCH_STARSHIP',
                payload: {
                    starship: response.data.results[0]
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
}

export const emptyStarshipsList = () => {
    return {
        type: 'EMPTY_STARSHIPS_LIST',
    }
}

export const emptyStarship = () => {
    return {
        type: 'EMPTY_STARSHIP',
    }
}

export const saveStarship = (payload) => {
    return async (dispatch, getState) => {
        try {
            var response = await baseAPI.post('/starship/add', payload);
            return Promise.resolve(response.data.id);
        }
        catch (e) {
            console.log(e);
            return Promise.resolve('error');
        }

    }
}

export const verifyStarshipModification = (starshipModel) => {
    return async (dispatch, getState) => {
        try {
            var response = await baseAPI.get('/starship/verify-mod/' + starshipModel);
            console.log({ _id: response.data.id });
            return Promise.resolve(response.data.id);
        }
        catch (e) {
            console.log(e);
            return Promise.resolve('error');
        }
    }
}

export const fetchStarshipById = (starshipId) => {
    return async (dispatch, getState) => {
        try {
            var response = await baseAPI.get('/starship/' + starshipId);

            dispatch({
                type: 'FETCH_STARSHIP',
                payload: {
                    starship: response.data
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
}