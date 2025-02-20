import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.scss'
import MainPage from './pages/MainPage.tsx/MainPage'
import FilmPage from './pages/FilmPage/FilmPage'
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import Menu from './components/Menu/Menu';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {

  return (
    <div className='find-films'>
      <h1 className="title-app">Поиск фильмов по каталогу IMDb</h1>
      <BrowserRouter basename='/ra16-homeworks-toolkit'>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/movies/:id" element={<FilmPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
