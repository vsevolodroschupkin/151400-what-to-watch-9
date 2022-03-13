import { Link, useLocation, useParams } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { AppRoute } from '../../consts';
import { Film } from '../../types/film';

type AddReviewScreenProps = {
  film : Film;
}

function AddReviewScreen({film}: AddReviewScreenProps): JSX.Element {
  const {id} = useParams();
  const location = useLocation();
  const {name, posterImage, backgroundImage } = film;

  const onReview = () => {
    throw new Error('Function is not implemented');
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          {<Logo />}
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.FILMS}${id}`} className="breadcrumbs__link">The Grand Budapest Hotel</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={location} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      < AddReviewForm onReview={onReview} />

    </section>
  );
}

export default AddReviewScreen;
