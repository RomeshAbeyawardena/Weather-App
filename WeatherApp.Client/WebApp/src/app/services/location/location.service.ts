import { Injectable } from '@angular/core';
import { LocationResponse } from './location-response';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { ConfigurationService } from '../configuration/configuration.service';
import { Subject } from 'rxjs';

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
    query: string,
    subject: Subject<LocationResponse>) {

    const params = new HttpParams({ fromObject: { query } });

    const headers = this
      .configurationService
      .getHttpHeaders();

    const response = this.httpService
      .get<LocationResponse>(baseUrl + this.getLocationUrl,
        { headers, params } );

    response.subscribe({
      next(response: LocationResponse) {
        subject.next(response);
      }});
  }

  private getLocationUrl = "location";
}
