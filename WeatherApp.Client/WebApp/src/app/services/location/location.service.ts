import { Injectable } from '@angular/core';
import { LocationResponse } from './location-response';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { ConfigurationService } from '../configuration/configuration.service';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private httpService: HttpClient,
    private configurationService: ConfigurationService) {
    
  }

  getLocations(
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

    response
      .pipe(
        catchError(error => {
          subject.error(error);
          return new Observable<LocationResponse>()
        }))
      .subscribe({
        next(response: LocationResponse) {
          subject.next(response);
        }
    });
  }

  private getLocationUrl = "location";
}
