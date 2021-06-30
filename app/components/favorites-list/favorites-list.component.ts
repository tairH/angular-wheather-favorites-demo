import { select } from '@angular-redux/store';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'redux';
import { FavoritesActions } from '../../actions/favorites.actions';
import { City } from '../../model/city';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FavoritesListComponent implements OnInit {
  @select(state => state.favorites.favorites) public cities$: Observable<
    any[]
  >;
  isLoading = false;
  selectedFavoriteCity: City = null;
  constructor(public actions:FavoritesActions) {
    this.cities$.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {}
  onCitySelected(city) {
    this.actions.setCurrentCity(city);
  }
}
