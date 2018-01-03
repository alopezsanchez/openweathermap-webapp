import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecipitationChartComponent } from './precipitation-chart.component';

describe('PrecipitationChartComponent', () => {
  let component: PrecipitationChartComponent;
  let fixture: ComponentFixture<PrecipitationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecipitationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecipitationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
