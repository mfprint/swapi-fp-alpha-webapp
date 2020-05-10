export const starshipsListReducer = (starshipsList = [], action) => {
    switch (action.type) {
        case 'FETCH_STARSHIP_ITEM':
            var _starshipsList = [...starshipsList];
            _starshipsList.push(action.payload.starship);
            return _starshipsList;
        case 'EMPTY_STARSHIPS_LIST':
            return [];
        default:
            return starshipsList;
    }
}

export const starshipReducer = (starship = null, action) => {
    switch (action.type) {
        case 'FETCH_STARSHIP':
            return action.payload.starship;
        case 'EMPTY_STARSHIP':
            return null;
        default:
            return starship;
    }
}