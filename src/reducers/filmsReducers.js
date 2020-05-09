export const filmsListReducer = (filmsList = [], action) => {
    switch (action.type) {
        case 'FETCH_FILMS_LIST':
            return action.payload.filmsList;
        default:
            return filmsList;
    }
}