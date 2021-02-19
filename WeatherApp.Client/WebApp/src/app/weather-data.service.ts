import { Injectable } from '@angular/core';
import { WeatherData } from './weather-data';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import { WeatherResponse } from './weather-response';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private httpClient: HttpClient,
    private configurationService: ConfigurationService) { }

  getWeatherData(
    baseUrl: string,
    region: string,
    fromDate: Date,
    toDate: Date): Promise<WeatherResponse> {
    const fromDateParameter = fromDate.toISOString();
    const toDateParameter = toDate.toISOString();

    const headers = this
      .configurationService
      .getHttpHeaders();

    const params = new HttpParams({ fromObject:
      { region, fromDateParameter, toDateParameter } });

    const response = this.httpClient.get<WeatherResponse>(
      baseUrl + this.getWeatherForecast,
      { headers, params } );

    return response.toPromise();
  }

  private getWeatherForecast = "";
}
