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
};

export const NAVIGATION ={
  BACKWARD: -1,
  FORWARD: 1,
};
