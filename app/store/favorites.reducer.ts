import { FavoritesActions } from '../actions/favorites.actions';
import { City } from '../model/city';

const INITIAL_STATE: City[] = [
  { code: 1, desc: 'Fabio' },
  { code: 2, desc: 'Lorenzo' },
  { code: 3, desc: 'Silvia' },
  { code: 4, desc: 'Lisa' }
];

export function FavoritesReducer (
  favorites: City[] = INITIAL_STATE, action: any
  ): any {

  switch (action.type) {
    case FavoritesActions.CITY_ADD:
      return [...favorites, action.payload];

    case FavoritesActions.CITY_DELETE:
      return favorites.filter((city) => city.code !== action.payload);

    default:
      return [...favorites];
  }
}

