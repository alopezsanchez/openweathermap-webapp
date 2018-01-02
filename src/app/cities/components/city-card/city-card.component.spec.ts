import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCardComponent } from './city-card.component';

describe('CityCardComponent', () => {
  let component: CityCardComponent;
  let fixture: ComponentFixture<CityCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
