import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigurationService } from '../configuration/configuration.service';
import { WeatherResponse } from './weather-response';
import { LocationItem } from '../location/location-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private httpClient: HttpClient,
    private configurationService: ConfigurationService) { }

  getWeatherData(
    locationItem: LocationItem,
    totalNumberOfDays: number,
    fromDate: Date,
    toDate: Date): Observable<WeatherResponse> {
    const fromDateParameter = fromDate.toISOString();
    const toDateParameter = toDate.toISOString();
    const id = locationItem.id.toString();
    const totalDays = totalNumberOfDays.toString();

    const configurationData = this.configurationService
      .getConfigurationData();

    const requestUrl = this.configurationService.getServiceUrl(
      configurationData,
      this.getWeatherForecast);

    const headers = this
      .configurationService
      .getHttpHeaders(configurationData);

    const params = new HttpParams({ fromObject:
      {
        id,
        totalDays,
        fromDateParameter,
        toDateParameter
      }
    });

    const response = this.httpClient.get<WeatherResponse>(
       requestUrl,
      { headers, params } );

    return response;
  }

  private getWeatherForecast = "weather";
}
