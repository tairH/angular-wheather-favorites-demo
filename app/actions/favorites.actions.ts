import { Injectable } from '@angular/core';
import { IAppState } from '../store/index';
import { NgRedux } from '@angular-redux/store';
import { City } from '../model/city';

@Injectable()
export class FavoritesActions {
  static CITY_ADD = 'CITY_ADD';
  static CITY_DELETE = 'CITY_DELETE';
  static SET_CURRENT_CITY = 'SET_CURRENT_CITY';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  add(city: City): void {
    //console.log(name)
    this.ngRedux.dispatch({
      type: FavoritesActions.CITY_ADD,
      payload: city
    });
  }

  delete(code): void {
    this.ngRedux.dispatch({
      type: FavoritesActions.CITY_DELETE,
      payload: code
    });
  }

  setCurrentCity(city: any): void {
    this.ngRedux.dispatch({
      type: FavoritesActions.SET_CURRENT_CITY,
      payload: city
    });
  }
}
