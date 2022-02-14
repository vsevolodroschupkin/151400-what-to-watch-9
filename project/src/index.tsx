import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const FILMS_COUNT = 20;
const MOCK_FILM = {
  id: 1,
  genre: 'Drama',
  date: '2014',
  title:'The Grand Budapest Hotel',
};

const MOCK_FILMS_ARRAY = new Array(FILMS_COUNT).fill(MOCK_FILM);

const Setting = {
  mainFilm: MOCK_FILM,
  films: MOCK_FILMS_ARRAY,
};

ReactDOM.render(
  <React.StrictMode>
    <App mainFilm = {Setting.mainFilm} films={Setting.films} />
  </React.StrictMode>,
  document.getElementById('root'));
