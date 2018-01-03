import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { CitiesService } from './services/cities/cities.service';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { CityCardComponent } from './components/city-card/city-card.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CitiesListComponent,
    CityCardComponent
  ],
  declarations: [
    CitiesListComponent,
    CityCardComponent
  ],
  providers: [
    CitiesService
  ]
})
export class CitiesModule { }
