import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ow-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.css']
})
export class DailyListComponent implements OnInit {
  private _dailyForecast = new BehaviorSubject<any[]>([]);
  public dailyForecastData: any[];

  @Input()
  set dailyForecast(value) {
    // set the latest value for _dailyForecast BehaviorSubject
    this._dailyForecast.next(value);
  }

  get dailyForecast() {
    // get the latest value from _dailyForecast BehaviorSubject
    return this._dailyForecast.getValue();
  }

  constructor() { }

  ngOnInit() {
    this._dailyForecast
      .subscribe(data => this.dailyForecastData = data);
  }

  getIconUrl(iconId: string): string {
    return `${environment.iconApiEndpoint}/${iconId}.png`;
  }
}
