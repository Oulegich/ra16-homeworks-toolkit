import { useParams } from "react-router-dom";
import FilmFull from "./FilmFull/FilmFull";
import FilmPreview from "./FilmPreview/FilmPreview";

const Film = ({ film }: { film: Film }) => {

    const params = useParams();

    const card = params.id ? (
        <FilmFull film={film} />) : (
        <FilmPreview film={film} />
    )

    return card
}

export default Film
