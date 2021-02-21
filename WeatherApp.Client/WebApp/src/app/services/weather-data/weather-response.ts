import { WeatherData } from './weather-data';

export class WeatherResponse {
  static default: WeatherResponse = new WeatherResponse(new Array(0));
  constructor(weatherForecast: Array<WeatherData>) {
    this.weatherForecast = weatherForecast;
  }

  weatherForecast: Array<WeatherData>
}
