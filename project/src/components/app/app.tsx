import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import Error404Screen from '../../pages/error-404-screen/error-404-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SingInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';

type Film = {
  id: number;
  title: string;
  genre: string;
  date: string;
}

type AppScreenProps = {
  mainFilm: Film;
  films: Film[];
};

function App({mainFilm, films}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainScreen mainFilm={mainFilm} films={films}/>} />
        <Route path={AppRoute.Film} element={<FilmScreen />} />
        <Route path={AppRoute.Login} element={<SingInScreen />} />
        <Route path={AppRoute.Player} element={<PlayerScreen />} />
        <Route path={AppRoute.AddReview} element={<AddReviewScreen />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute>
            <MyListScreen />
          </PrivateRoute>
        }
        />
        <Route path='*' element={<Error404Screen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
