import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

import { CitiesService } from '../../../cities/services/cities/cities.service';
import { City } from '../../../cities/models/city';

@Component({
  selector: 'ow-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private cityId: number;
  private todayDate = moment().format('YYYY-MM-DD');
  public cityInfo: City;
  public forecast: any;
  public dailyForecast: any[];

  constructor(private citiesService: CitiesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cityId = +this.route.snapshot.paramMap.get('id');
    this.getForecast();
    this.cityInfo = this.citiesService.getCityMock(this.cityId);
  }

  getForecast() {
    this.citiesService.getCityForecast(this.cityId)
      .subscribe(response => {
        this.forecast = response.list;
        // filter daily forecast (15:00)
        // skip today forecast
        this.dailyForecast =
          this.forecast.filter(element => element.dt_txt.indexOf(this.todayDate) === -1 && element.dt_txt.indexOf('15:00:00') > -1);
      });
  }
}
