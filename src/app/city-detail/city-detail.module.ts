import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { MaterialModule } from '../material/material.module';
import { DetailComponent } from './components/detail/detail.component';
import { TemperatureChartComponent } from './components/temperature-chart/temperature-chart.component';
import { PrecipitationChartComponent } from './components/precipitation-chart/precipitation-chart.component';
import { HumidityChartComponent } from './components/humidity-chart/humidity-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    MaterialModule
  ],
  exports: [
    DetailComponent
  ],
  declarations: [
    DetailComponent,
    TemperatureChartComponent,
    PrecipitationChartComponent,
    HumidityChartComponent
  ]
})
export class CityDetailModule { }
