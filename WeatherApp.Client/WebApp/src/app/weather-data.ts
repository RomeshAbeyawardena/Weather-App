export class WeatherData {
  constructor(weatherStateAbbr: string,
    applicableDate: Date,
    temperature: number) {
    this.weatherStateAbbr = weatherStateAbbr;
    this.applicableDate = applicableDate;
    this.temperature = temperature;
  }

  weatherStateAbbr: string;
  applicableDate: Date;
  temperature: number;
}
