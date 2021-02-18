import { Injectable } from '@angular/core';
import { LocationResponse } from './location-response';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpService: HttpClient) {
    this.getLocationUrl = "https://www.metaweather.com/api/location/search";
  }

  getLocation(query: string): Promise<LocationResponse> {
    
    const params = new HttpParams({ fromObject: { query } });

    return new Promise<LocationResponse>(resolve => resolve(new LocationResponse(1, "")));

  }

  getLocationUrl: string;
}