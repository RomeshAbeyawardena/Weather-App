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
    this.weatherCards = new Array(5);
    this.region = "NAN";
  }

  ngOnInit(): void {
    
  }

  weatherCards: Array<WeatherCard>;
  @Input() region: string;
}
