import { TestBed } from '@angular/core/testing';

import { WeatherImageService } from './weather-image.service';

describe('WeatherImageService', () => {
  let service: WeatherImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
