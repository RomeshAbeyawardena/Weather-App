import { WeatherData } from './weather-data';

export class WeatherResponse {
  constructor() {
    this.weatherForecast = new Array(0);
  }

  weatherForecast: Array<WeatherData>
}
