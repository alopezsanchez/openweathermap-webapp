import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesListComponent } from './cities/components/cities-list/cities-list.component';

const routes: Routes = [
  { path: 'cities', component: CitiesListComponent },
  { path: '', redirectTo: '/cities', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
