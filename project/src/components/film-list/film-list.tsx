import { useState } from 'react';
import { SETTINGS } from '../../consts';
import { Films } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Films;
};

function FilmList({films}: FilmListProps):JSX.Element {
  const [, setStateFilmId] = useState(SETTINGS.FILMLIST_INITIAL_STATE);

  const filmIdChangeHandler = (filmId:number) => {
    setStateFilmId(filmId);
  };

  return (
    <div className="catalog__films-list">
      {films.map((it) => <FilmCard film={it} key={it.id} filmIdChangeHandler = {filmIdChangeHandler}/>)}
    </div>
  );
}

export default FilmList;
