const checkInFavourites = ({favourites, imdbID}: {favourites: Film[], imdbID: string}) => {
    const imdbIDFindFavourites = favourites.find(filmEl => filmEl.imdbID == imdbID);

    if (imdbIDFindFavourites) {
        return true
    }

    return false
}

export default checkInFavourites