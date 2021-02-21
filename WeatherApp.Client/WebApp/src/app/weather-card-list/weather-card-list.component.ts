import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
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
    this.locations = new Subject<Array<LocationItem>>();

    const baseUrl = sessionStorage
      .getItem("baseApiUrl");

    if (baseUrl === null) {
      throw "baseUrl not available"
    }

    this.isLoading = true;
    this.totalDays = 0;
    this.displayTemperature = false;
    this.hasError = false;
    this.weatherDataLoaded = new EventEmitter<LocationItem>();
  }

  ngOnInit(): void {
    const context = this;

    this.locations
      .subscribe({
        next(locations: Array<LocationItem>) {
          context.isLoading = true;
          context
            .getWeatherData(locations)
        }
      });
  }

  getWeatherData(locations: Array<LocationItem>) {
    const firstLocation = locations[0];

    const result = this.weatherDataService.getWeatherData(
      firstLocation,
      this.totalDays,
      new Date(),
      new Date());
     
    const context = this;

    result
      .subscribe({
        next(weatherResponse: WeatherResponse) {
          context.weatherData = weatherResponse.weatherForecast;
          context.isLoading = false;
          context.weatherDataLoaded.emit(firstLocation);
        }, error(errorResponse){
          console.log("WeatherTableComponent", errorResponse);
          context.isLoading = false;
        } });
  }

  isLoading: boolean;
  weatherData: Array<WeatherData>;
  @Output() weatherDataLoaded: EventEmitter<LocationItem>;
  @Input() hasError: boolean; 
  @Input() displayTemperature: boolean;
  @Input() totalDays: number;
  @Input() locations: Subject<Array<LocationItem>>
}
