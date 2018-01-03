import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'ow-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.css']
})
export class TemperatureChartComponent implements OnInit {
  private _forecastData = new BehaviorSubject<any[]>([]);
  private data: any[];
  public labels: string[];
  public tempValues: number[];
  public tempDataset: any[];

  @Input()
  set forecastData(value) {
    // set the latest value for _forecastData BehaviorSubject
    this._forecastData.next(value);
  }

  get forecastData() {
    // get the latest value from _forecastData BehaviorSubject
    return this._forecastData.getValue();
  }

  constructor() { }

  ngOnInit() {
    this._forecastData
      .subscribe(data => {
        if (data) {
          this.data = data;
          // get labels
          this.labels = this.data.map(forecast => forecast.dt_txt);
          // obtain values
          this.tempValues = this.data.map(forecast => forecast.main.temp);
          // build dataset
          this.tempDataset = [{ data: this.tempValues, label: 'Temperature (º)' }];
        }
      });
  }
}
