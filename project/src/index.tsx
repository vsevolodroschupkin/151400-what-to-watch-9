import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

const Setting = {
  MAIN_FILM: films[0],
  FILMS: films,
};

ReactDOM.render(
  <React.StrictMode>
    <App mainFilm = {Setting.MAIN_FILM} films={Setting.FILMS} />
  </React.StrictMode>,
  document.getElementById('root'));
