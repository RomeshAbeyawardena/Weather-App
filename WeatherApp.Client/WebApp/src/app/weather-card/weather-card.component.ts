import { Input, Component, OnInit } from '@angular/core';
import { WeatherImageService } from '../services/weather-image/weather-image.service';
import { WeatherCard } from './weathercard';
import { WeatherData } from '../services/weather-data/weather-data';
import * as moment from 'moment';
import { Constants } from '../constants';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  constructor(private weatherImageService: WeatherImageService) {
    this.model = new WeatherCard("NAN", "", 0, "sn", false, false);
    this.displayTemperature = false;
    this.weather = new WeatherData("", "", new Date(), 0);
  }

  ngOnInit(): void {
    const currentDate = moment();
    const forecastDate = moment(this.weather.date);
    this.model.date = forecastDate.format(Constants.UKDateFormat);
    this.model.isCurrentDayOfWeek = forecastDate.isSame(currentDate, "day"); 
    this.model.dayOfWeek = forecastDate.format(Constants.DayFormat);
    this.model.iconShortHand = this.weather.stateAbbreviation;
    this.model.temperature = Math.round(this.weather.temperature);
    this.model.displayTemperature = this.displayTemperature;
  }

  getWeatherImage(): string {
    return this.weatherImageService
      .getWeatherImageUrl(this.model.iconShortHand);
  }

  @Input() displayTemperature: boolean;
  @Input() weather: WeatherData;
  model: WeatherCard
}
