import './MainPage.scss';
import Films from "../../components/Films/Films"
import SearchForm from "../../components/SearchForm/SearchForm"
import { useDispatch, useSelector } from 'react-redux';
import { resetFilms } from '../../redux/slices/filmsSlice';
import { useEffect } from 'react';

const MainPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetFilms())
    }, [dispatch])

    const { films, loading, error } = useSelector((state: FilmsStateSelector) => state.films);

    const listFilms = films.Search;

    const imdbID = films.imdbID;

    return (
        <>
            <SearchForm placeholder='Введите название фильма или IMDbId' />
            <Films films={listFilms} loading={loading} imdbID={imdbID} error={error} />
        </>
    )
}

export default MainPage