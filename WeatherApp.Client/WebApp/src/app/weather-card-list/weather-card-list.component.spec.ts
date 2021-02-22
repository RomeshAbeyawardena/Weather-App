import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardListComponent } from './weather-card-list.component';

describe('WeatherTableComponent', () => {
  let component: WeatherCardListComponent;
  let fixture: ComponentFixture<WeatherCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
