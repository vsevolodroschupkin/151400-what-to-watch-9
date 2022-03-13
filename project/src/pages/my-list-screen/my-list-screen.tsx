import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { Films } from '../../types/film';

type MyListScreenProps = {
  films: Films;
}

function MyListScreen ({films}:MyListScreenProps):JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        {<Logo />}

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={films}/>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
