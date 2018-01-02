import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { CitiesService } from './cities.service';
import { CityCardComponent } from './components/city-card/city-card.component';
import { MaterialModule } from '../material/material.module';

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
  providers: [CitiesService]
})
export class CitiesModule { }
