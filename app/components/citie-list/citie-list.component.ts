import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-citie-list',
  templateUrl: './citie-list.component.html',
  styleUrls: ['./citie-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CitieListComponent implements OnInit {

  searchCitiesCtrl = new FormControl();
  filteredCities: any;
  isLoading = false;
  errorMsg: string;

  constructor(
    private http: HttpClient, private favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    this.searchCitiesCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = "";
          this.filteredCities = [];
          this.isLoading = true;
        }),
        switchMap(value => this.favoritesService.searchCity()
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe(data => {
        if (data['Search'] == undefined) {
          this.errorMsg = data['Error'];
          this.filteredCities = [];
        } else {
          this.errorMsg = "";
          this.filteredCities = data['Search'];
        }

        console.log(this.filteredCities);
      });
    /**/  }

}