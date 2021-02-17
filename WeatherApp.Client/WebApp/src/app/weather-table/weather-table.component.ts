import { Component, Input, OnInit } from '@angular/core';
import { WeatherCard } from '../weather-card/weathercard';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss']
})
export class WeatherTableComponent implements OnInit {

  constructor() {
    this.weatherCards = new Array(6);
  }

  ngOnInit(): void {
  }

  @Input() weatherCards: Array<WeatherCard>;
}
