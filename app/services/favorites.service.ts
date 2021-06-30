import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { tap, map } from 'rxjs/operators';

import { of } from 'rxjs';
import { City } from '../model/city';

  

@Injectable({

  providedIn: 'root'

})

@Injectable()
export class FavoritesService {

  constructor(private http: HttpClient) { }

  allCities = [];

  searchCity(term: string) {

        return this.allCities.length ?
          of(this.allCities) :
          this.http.get("https://api.accuweather.com/locations/v1/cities/autocomplete?q="+term+"&apikey=mrBsuy5UA6FU0jgep7GtlwxX92PlZRe0").pipe(tap(data => this.allCities = data))
  }
  addFavoriteCity(city:City){}
  removeFavoriteCity(code:number){}

}