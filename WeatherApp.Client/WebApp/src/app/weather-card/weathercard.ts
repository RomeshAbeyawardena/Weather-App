export class WeatherCard {

  constructor(
    dayOfWeek: string,
    temperature: number,
    iconShortHand: string,
    isCurrentDayOfWeek: boolean
    )
  {
    this.dayOfWeek = dayOfWeek;
    this.temperature = temperature;
    this.iconShortHand = iconShortHand;
    this.isCurrentDayOfWeek = isCurrentDayOfWeek;
  }

  dayOfWeek: string;
  temperature: number;
  iconShortHand: string;
  isCurrentDayOfWeek: boolean;
}
