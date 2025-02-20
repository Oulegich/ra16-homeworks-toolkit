import { useParams } from "react-router-dom";
import Film from "../../components/Films/Film/FilmMain";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../../redux/slices/filmsSlice";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { AppDispatch } from "../../redux/store";

const FilmPage = () => {

    const dispatch: AppDispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            dispatch(fetchFilms({ filmValue: params.id, filmType: 'id' }));
        }
    }, [dispatch, params.id])

    const { films, loading } = useSelector((state: FilmsStateSelectorSingleFilm) => state.films);

    if (loading) return <Loader />

    return (
        <Film film={films} />
    )
}

export default FilmPage