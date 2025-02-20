import './FilmPreview.scss';

import { Link } from "react-router-dom";

const FilmPreview = ({film}: {film: Film}) => {

    return (
        <Link className='film-preview-link' to={`/movies/${film.imdbID}`}>
            <img src={film.Poster} alt={film.Title} className="film-preview-poster" />
            <div className="preview-text-content">
                <h2 className="film-preview-title">{film.Title}</h2>
                <time className="film-preview-year">{film.Year} год</time>
            </div>
        </Link>
    )
}

export default FilmPreview