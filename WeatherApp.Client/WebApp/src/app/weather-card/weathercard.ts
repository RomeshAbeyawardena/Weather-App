export class WeatherCard {

  constructor(
    dayOfWeek: string,
    date: string,
    temperature: number,
    iconShortHand: string,
    isCurrentDayOfWeek: boolean
    )
  {
    this.dayOfWeek = dayOfWeek;
    this.date = date,
    this.temperature = temperature;
    this.iconShortHand = iconShortHand;
    this.isCurrentDayOfWeek = isCurrentDayOfWeek;
  }

  dayOfWeek: string;
  date: string;
  temperature: number;
  iconShortHand: string;
  isCurrentDayOfWeek: boolean;
}
