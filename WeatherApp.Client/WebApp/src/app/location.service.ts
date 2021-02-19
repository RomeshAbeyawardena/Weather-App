import { Injectable } from '@angular/core';
import { LocationResponse } from './location-response';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpService: HttpClient) {
    
  }

  getLocation(baseUrl: string, query: string): Promise<LocationResponse> {
    
    const params = new HttpParams({ fromObject: { query } });

    const response = this.httpService.get<LocationResponse>(baseUrl + this.getLocationUrl, { params} );

    return response.toPromise();
  }

  private getLocationUrl = "location";
}
