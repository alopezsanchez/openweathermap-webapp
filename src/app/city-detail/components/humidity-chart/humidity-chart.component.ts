import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'ow-humidity-chart',
  templateUrl: './humidity-chart.component.html',
  styleUrls: ['./humidity-chart.component.css']
})
export class HumidityChartComponent implements OnInit {
  private _forecastData = new BehaviorSubject<any[]>([]);
  private data: any[];
  private humidityValues: number[];
  public labels: string[];
  public humidityDataset: object[];

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
          // I prefer to duplicate some trivial code instead of add more BehaviourSubjects
          this.data = data;
          // obtain labels
          this.labels = this.data.map(forecast => forecast.dt_txt);
          // obtain values
          this.humidityValues = this.data.map(forecast => forecast.main.humidity);
          // build dataset
          this.humidityDataset = [{ data: this.humidityValues, label: 'Humidity (%)'}];
        }
      });
  }

}
