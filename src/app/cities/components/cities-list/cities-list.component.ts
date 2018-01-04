import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';
import { CitiesService } from '../../services/cities/cities.service';
import { City } from '../../models/city';

@Component({
  selector: 'ow-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {
  public cities: any[] = [];

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.citiesService.getCities()
      .subscribe(cities => this.cities = cities.list);
  }

  getIconUrl(iconId: string): string {
    return `${environment.iconApiEndpoint}/${iconId}.png`;
  }
}
