export class WeatherCard {
  static default:WeatherCard = new WeatherCard("", "", 0, "", false, false);
  constructor(
    dayOfWeek: string,
    date: string,
    temperature: number,
    iconShortHand: string,
    isCurrentDayOfWeek: boolean,
    displayTemperature: boolean
    )
  {
    this.dayOfWeek = dayOfWeek;
    this.date = date,
    this.temperature = temperature;
    this.iconShortHand = iconShortHand;
    this.isCurrentDayOfWeek = isCurrentDayOfWeek;
    this.displayTemperature = displayTemperature;
  }

  displayTemperature: boolean;
  dayOfWeek: string;
  date: string;
  temperature: number;
  iconShortHand: string;
  isCurrentDayOfWeek: boolean;
}
