import { useDispatch, useSelector } from 'react-redux';
import './FilmFull.scss';
import { addFilmInFavourites, removeFilmInFavourites } from '../../../../redux/slices/filmsSlice';
import checkInFavourites from '../../../../utils/checkInFavourites';

const FilmFull = ({ film }: { film: Film }) => {

    const dispatch = useDispatch();

    const { favourites } = useSelector((state: FavouritesFilmsStateSelector) => state.films);

    const addInFavourites = () => {
        dispatch(addFilmInFavourites({
            film: film
        }))
    }

    const removeInFavourites = () => {
        dispatch(removeFilmInFavourites({ imdbID: film.imdbID })
        )
    }

    return (
        <div className="film-full-card">
            <div className="btn-favourites-container">
                <button className="btn-favourites" onClick={checkInFavourites({ favourites, imdbID: film.imdbID }) ? removeInFavourites : addInFavourites}>{checkInFavourites({ favourites, imdbID: film.imdbID }) ? '★' : '☆'}</button>
            </div>
            <div className="film-full-content">
                <img src={film.Poster} alt={film.Title} className="film-poster" />
                <div className="full-text-content-film">
                    <h2 className="full-title-film">Название: {film.Title}</h2>
                    <time className="full-year-film">Год выпуск: {film.Year}</time>
                    <span className="full-genre-film">Жанр: {film.Genre}</span>
                    <span className="full-runtime-film">Продолжительность: {film.Runtime}</span>
                    <span className="full-director-film">Режиссер: {film.Director}</span>
                    <span className="full-actors-film">Актёры: {film.Actors}</span>
                    <span className="full-ratings-film">Рейтинг фильма imdb: {film?.Ratings?.[0].Value.split('/')[0]}</span>
                </div>
            </div>
        </div>
    )
}

export default FilmFull