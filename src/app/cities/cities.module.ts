import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { CitiesService } from './cities.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CitiesListComponent
  ],
  declarations: [CitiesListComponent],
  providers: [CitiesService]
})
export class CitiesModule { }
