import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { City, State } from './model/city';
import { FavoritesActions } from './actions/favorites.actions';
import { CitieListComponent } from './components/citie-list';
import { FavoritesService } from './services/favorites.service';
import { finalize } from 'rxjs-compat/operators/finalize';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',  
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  opened: boolean;
  /*
  @select(state => state.favorites.favorites) public cities$: Observable<
    City[]
  >;

  @select(state => state.favorites.selectedCity)
  public selectedCity$: Observable<any>;
*/
  constructor(
    public actions: FavoritesActions,
    private favoritesService: FavoritesService
  ) {
    /*
    this.cities$.subscribe(listData => {
      console.log(listData);
    });
    this.selectedCity$.subscribe((city)=>{
      console.log(city);
    });*/
  }
  clickHandler() {
    this.sidenav.close();
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
