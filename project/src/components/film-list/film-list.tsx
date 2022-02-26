import { useState } from 'react';
import { Films } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Films;
};

function FilmList({films}: FilmListProps):JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stateFilmId, setStateFilmId] = useState(0);

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
