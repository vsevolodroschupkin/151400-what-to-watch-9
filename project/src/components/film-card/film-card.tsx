import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppRoute, SETTINGS } from '../../consts';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
  filmIdChangeHandler: (filmId : number) => void;
}

function FilmCard (props:FilmCardProps):JSX.Element {
  const {film} = props;
  const {previewImage, name, id, previewVideoLink} = film;
  const {filmIdChangeHandler} = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isNeedPlay, setIsNeedPlay] = useState(false);

  useEffect(() => {
    let timeoutId: number | NodeJS.Timeout | null = null;

    if (!isNeedPlay && timeoutId) {
      setIsPlaying(false);
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => setIsPlaying(true), SETTINGS.VIDEO_PREVIEW_DELAY) ;
    // eslint-disable-next-line no-console
    console.log(timeoutId);

    // return () => (clearTimeout(timeoutId));

  }, [isNeedPlay]);


  const onMouseEnterHandler = () => {
    filmIdChangeHandler(id);
    setIsNeedPlay (true);
  };

  const onMouseLeaveHandler = () => {
    filmIdChangeHandler(0);
    setIsNeedPlay(false);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter = {onMouseEnterHandler}
      onMouseLeave = {onMouseLeaveHandler}
    >
      <div className="small-film-card__image">
        {/* <img src={previewImage} alt={name} width="280" height="175" /> */}
        {/* <video poster={previewImage} src={previewVideoLink}  width="280" height="175" muted/> */}
        <VideoPlayer poster={previewImage} src={previewVideoLink} muted width="280" height="175" isPlaying={isPlaying}/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.FILMS}${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
