import Logo from '../../components/logo/logo';

function Error404(): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">404</h1>

      <header className="page-header film-card__head">
        {<Logo />}

      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">404</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">genre</span>
              <span className="film-card__year">date</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error404;
