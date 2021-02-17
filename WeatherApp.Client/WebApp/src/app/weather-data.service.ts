import { Injectable } from '@angular/core';
import { WeatherData } from './weather-data';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private httpClient: HttpClient) { }
  getWeatherData(
    region: string,
    fromDate: Date,
    toDate: Date): Promise<Array<WeatherData>> {
    const fromDateParameter = fromDate.toISOString();
    const toDateParameter = toDate.toISOString();

    const params = new HttpParams({ fromObject:
      { region, fromDateParameter, toDateParameter } });

    this.httpClient.get(
      "http://www.google.com",
      { params } );

    return new Promise((resolve: Function) =>  resolve(Array(5)));
  }
}
