import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CurrentCityWeatherComponent } from '../components/current-city-weather/current-city-weather.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: '../components/home/home.module#HomeModule' },
  { path: 'favorites', loadChildren: '../components/favorites/favorites.module#FavoritesModule' }
]

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  //declarations:[CurrentCityWeatherComponent],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }