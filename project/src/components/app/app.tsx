import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, SETTINGS } from '../../consts';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import Error404Screen from '../../pages/error-404-screen/error-404-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SingInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';
import {Films, Film} from '../../types/film';

type AppScreenProps = {
  mainFilm: Film;
  films: Films;
};

function App({mainFilm, films}: AppScreenProps): JSX.Element {
  const authorizationStatus = SETTINGS.AUTHORIZATION_STATUS;

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainScreen mainFilm={mainFilm} films={films}/>} />
        <Route path={AppRoute.FILM} element={<FilmScreen film={mainFilm} similarFilms={films} />} />
        <Route path={AppRoute.LOGIN} element={<SingInScreen />} />
        <Route path={AppRoute.PLAYER} element={<PlayerScreen film={mainFilm}/>} />
        <Route path={AppRoute.ADD_REVIEW} element={<AddReviewScreen film={mainFilm} />} />
        <Route path={AppRoute.MY_LIST} element={
          <PrivateRoute authorizationStatus = {authorizationStatus}>
            <MyListScreen films={films}/>
          </PrivateRoute>
        }
        />
        <Route path='*' element={<Error404Screen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
