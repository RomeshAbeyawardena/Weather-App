export class WeatherData {
  constructor(
    state: string,
    stateAbbreviation: string,
    date: Date,
    temperature: number) {
    this.state = state;
    this.stateAbbreviation = stateAbbreviation;
    this.date = date;
    this.temperature = temperature;
  }

  state: string;
  stateAbbreviation: string;
  date: Date;
  temperature: number;
}
