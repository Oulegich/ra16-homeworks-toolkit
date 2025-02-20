/// <reference types="vite/client" />

interface SearchForm {
    placeholder: string,
}

interface Ratings {
    Source: string,
    Value: string
}

interface Film {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
    Genre?: string,
    Runtime?: string,
    Director?: string,
    Actors?: string,
    Ratings?: Ratings[]
}

interface FilmsState {
    favourites: Film[],
    films: Film[],
    loading: boolean,
    error: string,
}

interface FilmsStateSelectorManyFilms {
    loading: boolean,
    error: string,
    films: {
        Search: Film[],
        imdbID?: string
    }
}

interface FilmsStateSelectorSingleFilm {
    films: {
        films: Film,
        loading: boolean
    }
}

interface FilmsStateSelector {
    films: FilmsStateSelectorManyFilms
}

interface FavouritesFilmsStateSelector {
    films: {
        favourites: Film[],
        loading: boolean
    }
}

interface PayloadFilmAddInFavourites {
    film: Film
}

interface PayloadFilmRemoveInFavourites {
    imdbID: string
}

interface FetchFilmsParams {
    filmValue: string,
    filmType: string
}