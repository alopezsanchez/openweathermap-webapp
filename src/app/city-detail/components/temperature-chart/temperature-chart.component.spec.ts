import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureChartComponent } from './temperature-chart.component';

describe('TodayChartComponent', () => {
  let component: TemperatureChartComponent;
  let fixture: ComponentFixture<TemperatureChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
