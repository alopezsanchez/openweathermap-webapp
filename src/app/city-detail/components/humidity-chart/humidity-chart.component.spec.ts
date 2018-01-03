import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityChartComponent } from './humidity-chart.component';

describe('HumidityChartComponent', () => {
  let component: HumidityChartComponent;
  let fixture: ComponentFixture<HumidityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumidityChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
