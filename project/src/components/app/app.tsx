import MainScreen from '../main-screen/main-screen';

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
  return <MainScreen mainFilm = {mainFilm} films = {films}/>;
}

export default App;
