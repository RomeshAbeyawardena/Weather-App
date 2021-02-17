import { Component, Input, OnInit } from '@angular/core';
import { WeatherCard } from '../weather-card/weathercard';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss']
})
export class WeatherTableComponent implements OnInit {

  constructor(private weatherDataService: WeatherDataService) {
    this.weatherCards = new Array(0);
    this.region = "NAN";
    this.fromDate = new Date();
    this.toDate = new Date();
  }

  ngOnInit(): void {
    this.weatherDataService
      .getWeatherData(
        this.region,
        this.fromDate,
        this.toDate)
      .then(
        (result: Array<WeatherCard>) => this.weatherCards =  result);
  }

  weatherCards: Array<WeatherCard>;
  @Input() region: string;
  @Input() fromDate: Date;
  @Input() toDate: Date;
}
