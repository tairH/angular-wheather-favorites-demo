import { combineReducers } from 'redux';
import { FavoritesReducer } from './favorites.reducer';
import { City } from '../model/city';

export class IAppState {
  favorites: City[];
  config;
};

export const rootReducer = combineReducers<IAppState>({
  favorites: FavoritesReducer
});


