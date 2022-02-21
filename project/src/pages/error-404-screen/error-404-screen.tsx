import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';

function Error404Screen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        {<Logo />}

        <h1 className="page-title user-page__title">404</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a href="/" className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list" style={{flexDirection: 'column'}}>
          <p>Страница не найдена или не существует.</p>
          <Link to={AppRoute.Main} className='logo__link' style={{display: 'block', width: 'auto', height: 'auto', padding: '10px 15px'}}>На главную</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Error404Screen;
