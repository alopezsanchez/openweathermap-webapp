import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// TODO: Change dataset color
@Component({
  selector: 'ow-precipitation-chart',
  templateUrl: './precipitation-chart.component.html',
  styleUrls: ['./precipitation-chart.component.css']
})
export class PrecipitationChartComponent implements OnInit {
  private _forecastData = new BehaviorSubject<any[]>([]);
  private data: any[];
  private precipitationValues: number[];
  public precipitationDataset: object[];
  public labels: string[];
  public colors: object[] = [
    { // blue
      backgroundColor: 'rgba(40, 49, 229,0.7)',
      borderColor: 'rgba(40, 49, 229,1)',
      pointBackgroundColor: 'rgba(40, 49, 229,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(40, 49, 229,0.8)'
    }
  ];

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
        // I prefer to duplicate some trivial code instead of add more BehaviourSubjects
        if (data) {
          this.data = data;
          // obtain labels
          this.labels = this.data.map(forecast => forecast.dt_txt);
          // obtain values
          this.precipitationValues = this.data.map(forecast => forecast.rain['3h']);
          // build dataset
          this.precipitationDataset = [{ data: this.precipitationValues, label: 'Precipitations (mm)' }];
        }
      });
  }

}
