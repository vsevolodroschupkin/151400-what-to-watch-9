import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { Film } from '../../types/film';


type FilmCardProps = {
  film: Film;
  filmIdChangeHandler: (filmId : number) => void;
}

function FilmCard (props:FilmCardProps):JSX.Element {
  const {film} = props;
  const {previewImage, name, id} = film;
  const {filmIdChangeHandler} = props;

  const onMouseEnterHandler = () => filmIdChangeHandler(id);
  const onMouseLeaveHandler = () => filmIdChangeHandler(0);

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter = {onMouseEnterHandler}
      onMouseLeave = {onMouseLeaveHandler}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.FILMS}${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
