export enum AppRoute {
  MAIN = '/',
  LOGIN = '/login',
  MY_LIST = '/mylist',
  FILMS = '/films/',
  FILM = '/films/:id',
  ADD_REVIEW = '/films/:id/review',
  PLAYER = '/player/:id'
}

export const SETTINGS = {
  STARS_COUNT: 10,
  FILMLIST_INITIAL_STATE: 0,
  AUTHORIZATION_STATUS: true,
  VIDEO_PREVIEW_DELAY: 1000,
};

export const NAVIGATION ={
  BACKWARD: -1,
  FORWARD: 1,
};

export const GENRES = ['All Genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];


