import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { environment } from './../../environments/environment';
import { City } from './models/city';
import { CITIES } from './mock-cities';

@Injectable()
export class CitiesService {

  private apiKey: string = environment.apiKey;
  private keyQueryString: any = `&APPID=${this.apiKey}`;
  private apiEndpoint: string = environment.apiEndpoint;
  private apiWeatherEndpoint = '/group';
  private idsQueryString = 'id=';
  private apiUrl = '';

  constructor(private http: HttpClient) {
    CITIES.forEach((city, index, arr) => {
      this.idsQueryString += index + 1 === arr.length ? city.id : `${city.id},`;
    });
    this.apiUrl =
      `${this.apiEndpoint}${this.apiWeatherEndpoint}?units=metric&${this.idsQueryString}${this.keyQueryString}`;
  }

  getCities(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
