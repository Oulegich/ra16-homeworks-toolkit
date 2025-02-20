import './SearchForm.scss';

import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFilms } from "../../redux/slices/filmsSlice";

import { AppDispatch } from "../../redux/store";

const SearchForm = ({ ...props }: SearchForm) => {

    const dispatch: AppDispatch = useDispatch();

    const [data, setData] = useState({ filmInfo: '', filmType: 'name' });

    const handleChange = ((e: ChangeEvent<HTMLInputElement>): void => {

        const { name, value } = e.target;

        setData((prevInput) => {

            const newData = { ...prevInput, [name]: value }

            return newData;
        });
    });

    const onSelect = ((e: ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = e.target;

        setData((prevInput) => {

            const newData = { ...prevInput, [name]: value }

            return newData;
        });
    })

    const handleSubmit = ((e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (data.filmInfo) {
            dispatch(fetchFilms({ filmValue: data.filmInfo, filmType: data.filmType }));
            setData({ filmInfo: '', filmType: 'name' });
        }

        setData({ filmInfo: '', filmType: 'name' });
    })

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="input-search-select">
                <input name='filmInfo' placeholder={props.placeholder} type="text" className="search-input" onChange={handleChange} value={data.filmInfo} />
                <select name='filmType' value={data.filmType} className="select-search" onChange={onSelect}>
                    <option value="name">Название</option>
                    <option value="id">IMDbID</option>
                </select>
            </div>
            <button type='submit' className="search-btn">Поиск</button>
        </form>
    )
}

export default SearchForm