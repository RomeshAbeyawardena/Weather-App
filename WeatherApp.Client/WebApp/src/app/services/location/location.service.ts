import { Injectable } from '@angular/core';
import { LocationResponse } from './location-response';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfigurationService } from '../configuration/configuration.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private httpService: HttpClient,
    private configurationService: ConfigurationService) {
    
  }

  getLocations(
    query: string): Observable<LocationResponse> {

    const configurationData = this.configurationService
      .getConfigurationData()

    const requestUrl = this.configurationService
      .getServiceUrl(configurationData,
        this.getLocationUrl);

    const headers = this.configurationService
        .getHttpHeaders(configurationData);

    const params = new HttpParams({ fromObject: { query } });
    
    return this.httpService
      .get<LocationResponse>(requestUrl,
        { headers, params } );
  }

  private getLocationUrl = "location";
}
