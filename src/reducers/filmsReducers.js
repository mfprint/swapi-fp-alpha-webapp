export const filmsListReducer = (filmsList = [], action) => {
    switch (action.type) {
        case 'FETCH_FILMS_LIST':
            return action.payload.filmsList;
        default:
            return filmsList;
    }
}

export const filmReducer = (film = null, action) => {
    switch (action.type) {
        case 'SET_FILM':
            return action.payload.film;
        default:
            return film;
    }
}