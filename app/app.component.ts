import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { City, State } from './model/city';
import { FavoritesActions } from './actions/favorites.actions';
import { CitieListComponent } from './components/citie-list';
import { FavoritesService } from './services/favorites.service';
import { finalize } from 'rxjs-compat/operators/finalize';
@Component({
  selector: 'my-app',
  template: `
    <div>
      <app-citie-list></app-citie-list>
      <hr />
      TOTAL Favorite Cities: {{ (cities$ | async).length }}
      <br />
      Cureent Selected City: {{ ((selectedCity$ | async)??{LocalizedName:null}).LocalizedName }}

      <br />
      <input
        type="text"
        placeholder="add city"
        #newCity
        (keyup.enter)="addCity(newCity)"
      />

      <hr />
      <li class="list-group-item" *ngFor="let item of (cities$ | async)">
        {{ item.desc }}

        <button
          class="btn btn-danger btn-xs pull-right"
          (click)="deleteCity(item.code)"
        >
          delete
        </button>
      </li>
    </div>
  `
})
export class AppComponent {
  @select(state => state.favorites.favorites) public cities$: Observable<
    City[]
  >;

  @select(state => state.favorites.selectedCity)
  public selectedCity$: Observable<any>;

  constructor(
    public actions: FavoritesActions,
    private favoritesService: FavoritesService
  ) {
    this.cities$.subscribe(listData => {
      console.log(listData);
    });
    this.selectedCity$.subscribe((city)=>{
      console.log(city);
    });
  }

  addCity(labelInput: HTMLInputElement) {
    // this.favoritesService.addFavoriteCity().pipe(
    //   finalize(() => {
    this.actions.add({ code: 1, desc: labelInput.value });
    // }));
    labelInput.value = '';
  }
  deleteCity(code) {
    // this.favoritesService.removeFavoriteCity().pipe(
    //  finalize(() => {
    this.actions.delete(code);
    //   }));
  }
}
