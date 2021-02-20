import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationItem } from '../services/location/location-item';
import { WeatherData } from '../services/weather-data/weather-data';
import { WeatherDataService } from '../services/weather-data/weather-data.service';
import { WeatherResponse } from '../services/weather-data/weather-response';

@Component({
  selector: 'app-weather-card-list',
  templateUrl: './weather-card-list.component.html',
  styleUrls: ['./weather-card-list.component.scss']
})
export class WeatherCardListComponent implements OnInit {

  constructor(private weatherDataService: WeatherDataService) {
    this.weatherData = new Array<WeatherData>();
    this.locations = new Observable<Array<LocationItem>>();

    const baseUrl = sessionStorage
      .getItem("baseApiUrl");

    if (baseUrl === null) {
      throw "baseUrl not available"
    }

    this.baseApiUrl = baseUrl;
    this.isLoading = true;
    this.totalDays = 0;
    this.displayTemperature = false;
  }

  ngOnInit(): void {
    const context = this;

    this.locations
      .subscribe({
        next(locations: Array<LocationItem>) {
          context
            .getWeatherData(locations) }
      });
  }

  getWeatherData(locations: Array<LocationItem>) {
    const result = this.weatherDataService.getWeatherData(
      this.baseApiUrl,
      locations[0],
      this.totalDays,
      new Date(),
      new Date());

    const context = this;

    result
      .subscribe({
        next(weatherResponse: WeatherResponse) {
          context.weatherData = weatherResponse.weatherForecast;
          context.isLoading = false;
        }, error(errorResponse){ console.log("WeatherTableComponent", errorResponse); } });
  }

  baseApiUrl: string;
  isLoading: boolean;
  weatherData: Array<WeatherData>;
  @Input() displayTemperature: boolean;
  @Input() totalDays: number;
  @Input() locations: Observable<Array<LocationItem>>
}