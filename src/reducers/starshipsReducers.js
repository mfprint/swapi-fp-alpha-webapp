export const starshipsListReducer = (starshipsList = [], action) => {
    switch (action.type) {
        case 'FETCH_STARSHIP':
            var _starshipsList = [...starshipsList];
            _starshipsList.push(action.payload.starship);
            return _starshipsList;
        default:
            return starshipsList;
    }
}