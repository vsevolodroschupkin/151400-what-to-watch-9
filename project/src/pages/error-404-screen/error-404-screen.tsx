import Logo from '../../components/logo/logo';
import { AppRoute } from '../../consts';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import UserBlock from '../../components/user-block/user-block';

function Error404Screen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        {<Logo />}

        <h1 className="page-title user-page__title">404</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list" style={{flexDirection: 'column'}}>
          <p>Страница не найдена или не существует.</p>
          <Link to={AppRoute.MAIN} className='logo__link' style={{display: 'block', width: 'auto', height: 'auto', padding: '10px 15px'}}>На главную</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Error404Screen;
