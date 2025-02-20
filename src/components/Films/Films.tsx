import './Films.scss';
import { useNavigate } from "react-router-dom";
import Film from "./Film/FilmMain"
import Loader from '../Loader/Loader';

const Films = ({films, loading, imdbID, error}: {films: Film[], loading: boolean, imdbID?: string, error?: string}) => {

    const navigate = useNavigate();

    if (loading) return <Loader />

    if (imdbID) {
        navigate('/movies/' + imdbID);
    }

    if (Array.isArray(films)) {
        return (
            <ul className="films-list">
                {films?.map((film: Film) => (
                    <li className="film-elem" key={film.imdbID}>
                        <Film film={film} />
                    </li>
                ))}
            </ul>
        )
    } else if (error) {
        return (<p className='not-films'>Фильмы не найдены!</p>)
    }
}

export default Films