import { Input, Component, OnInit } from '@angular/core';
import { WeatherImageService } from '../weather-image.service';
import { WeatherCard } from './weathercard';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  constructor(private weatherImageService: WeatherImageService) {
    this.model = new WeatherCard("NAN", 0, "sn", false);
  }

  ngOnInit(): void {
  }

  getWeatherImage(): string {
    return this.weatherImageService.getWeatherImageUrl(this.model.iconShortHand);
  }

  @Input() model: WeatherCard
}
