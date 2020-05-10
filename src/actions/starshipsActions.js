import swAPI from '../APIs/swAPI';

export const fetchStarship = (starshipUrl) => {
    return async (dispatch, getState) => {
        var response = await swAPI.get(starshipUrl);
        console.log(response);

        dispatch({
            type: 'FETCH_STARSHIP',
            payload: {
                starship: response.data
            }
        });
    }
}