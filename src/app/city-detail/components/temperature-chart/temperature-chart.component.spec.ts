import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayChartComponent } from './today-chart.component';

describe('TodayChartComponent', () => {
  let component: TodayChartComponent;
  let fixture: ComponentFixture<TodayChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
