import {
    buildCreateSlice,
    asyncThunkCreator,
    PayloadAction
} from "@reduxjs/toolkit";

const initialState = {
    favourites: [],
    films: [],
    loading: false,
    error: ''
} as FilmsState;

const createSliceWithThunk = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export const filmsSlice = createSliceWithThunk({
    name: "films",
    initialState,
    selectors: {
        filmsState: (state) => state,
        filmsList: (state) => state.favourites,
    },
    reducers: (create) => ({
        addFilmInFavourites: create.reducer((state, action: PayloadAction<PayloadFilmAddInFavourites>) => {
            const isDuplicate = state.favourites.find(film => film.imdbID == action.payload.film.imdbID);

            if (!isDuplicate) {
                state.favourites.push(action.payload.film)
            } else {
                console.error('Этот фильм уже добавлен в избранное!')
            }
        }),

        removeFilmInFavourites: create.reducer((state, action: PayloadAction<PayloadFilmRemoveInFavourites>) => {
            const indexFindFilm = state.favourites.findIndex(film => film.imdbID == action.payload.imdbID);

            if (indexFindFilm !== -1) {
                state.favourites.splice(indexFindFilm, 1)
            } else {
                console.error('Этого фильма нет в избранном, чтобы удалить!')
            }
        }),

        resetFilms: create.reducer((state) => {
            state.films = []
        }),
        fetchFilms: create.asyncThunk<Film[], FetchFilmsParams>(
            async (params, { rejectWithValue }) => {
                try {

                    const { filmValue, filmType } = params;

                    if (filmType == 'id') {

                        const response = await fetch(`${import.meta.env.VITE_BASE_URL}?apikey=${import.meta.env.VITE_API_KEY_1}&i=${filmValue}`);

                        const res = await response.json();

                        if (res.Error) {
                            return rejectWithValue("Ошибка загрузки фильмов!");
                        }

                        return res;
                    } else if (filmType == 'name') {
                        const response = await fetch(`${import.meta.env.VITE_BASE_URL}?apikey=${import.meta.env.VITE_API_KEY_2}&s=${filmValue}`);

                        const res = await response.json();

                        if (res.Error) {
                            return rejectWithValue("Ошибка загрузки фильмов!");
                        }

                        return res
                    }
                } catch (e) {
                    return rejectWithValue(e);
                }
            },
            {
                pending: (state) => {
                    state.loading = true;
                    state.error = "";
                },
                fulfilled: (state, action) => {

                    state.films = action.payload;

                    state.error = "";
                },
                rejected: (state, action) => {
                    state.error = action.payload as string;
                },
                settled: (state) => {
                    state.loading = false;
                },
            }
        ),
    }),
});

export const { fetchFilms, addFilmInFavourites, removeFilmInFavourites, resetFilms } = filmsSlice.actions;
export default filmsSlice.reducer;