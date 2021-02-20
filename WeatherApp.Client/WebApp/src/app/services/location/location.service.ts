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

  getLocation(
    baseUrl: string,
    query: string): Observable<LocationResponse> {
    
    const params = new HttpParams({ fromObject: { query } });

    const headers = this
      .configurationService
      .getHttpHeaders();

    const response = this.httpService
      .get<LocationResponse>(baseUrl + this.getLocationUrl,
        { headers, params } );

    return response;
  }

  private getLocationUrl = "location";
}
