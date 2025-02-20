import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Films from "../../components/Films/Films";

const FavouritesPage = () => {

    const { favourites, loading } = useSelector((state: FavouritesFilmsStateSelector) => state.films);

    if (loading) return <Loader />

    if (!favourites.length) return (<p className='not-films'>Избранные фильмы не найдены( Добавьте их!</p>)

    return (
        <Films films={favourites} loading={loading}  />
    )
}

export default FavouritesPage