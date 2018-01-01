import { Component, OnInit } from '@angular/core';

import { CitiesService } from '../../cities.service';
import { City } from '../../models/city';

@Component({
  selector: 'ow-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  private cities: any[] = [];

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.citiesService.getCities()
      .subscribe(cities => this.cities = cities.list);
  }
}
