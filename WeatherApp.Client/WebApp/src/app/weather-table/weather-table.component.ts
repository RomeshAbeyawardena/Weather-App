import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationItem } from '../location-item';
import { WeatherData } from '../weather-data';
import { WeatherDataService } from '../weather-data.service';
import { WeatherResponse } from '../weather-response';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss']
})
export class WeatherTableComponent implements OnInit {

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
        } });
  }

  baseApiUrl: string;
  isLoading: boolean;
  weatherData: Array<WeatherData>;
  @Input() displayTemperature: boolean;
  @Input() totalDays: number;
  @Input() locations: Observable<Array<LocationItem>>
}
