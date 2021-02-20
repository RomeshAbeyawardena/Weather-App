import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherImageService {

  constructor() { }
  getWeatherImageUrl(iconShortHand: string): string {
    return "https://www.metaweather.com/static/img/weather/png/"
      + iconShortHand
      + ".png";
  }
}
