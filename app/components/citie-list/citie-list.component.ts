import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-citie-list',
  templateUrl: './citie-list.component.html',
  styleUrls: ['./citie-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CitieListComponent implements OnInit {

  searchCitiesCtrl = new FormControl();
  filteredMovies: any;
  isLoading = false;
  errorMsg: string;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.searchCitiesCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = "";
          this.filteredMovies = [];
          this.isLoading = true;
        }),
        switchMap(value => this.http.get("http://apidev.accuweather.com/locations/v1/cities/autocomplete?q="+value+"&apikey={mrBsuy5UA6FU0jgep7GtlwxX92PlZRe0}")
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
          this.filteredMovies = [];
        } else {
          this.errorMsg = "";
          this.filteredMovies = data['Search'];
        }

        console.log(this.filteredMovies);
      });
    /**/  }

}