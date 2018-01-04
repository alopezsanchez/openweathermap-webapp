import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyListComponent } from './daily-list.component';

describe('DailyListComponent', () => {
  let component: DailyListComponent;
  let fixture: ComponentFixture<DailyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
