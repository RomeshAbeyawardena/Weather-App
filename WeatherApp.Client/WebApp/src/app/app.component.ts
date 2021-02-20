import { Component, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocationItem } from './location-item';
import { LocationResponse } from './location-response';
import { LocationService } from './location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather App';

  constructor(
    private eltRef: ElementRef,
    private locationService: LocationService) {
    const nativeElement = eltRef.nativeElement;

    this.baseApiUrl = nativeElement.getAttribute('baseapiurl');
    this.query = nativeElement.getAttribute('query');
    this.totalDays = nativeElement.getAttribute('totaldays');
    const value =  nativeElement.getAttribute('displaytemperature'); 
    
    this.displayTemperature = value === 'displayTemperature'
    
    this.searchLocations = new Observable<Array<LocationItem>>();
    sessionStorage.setItem(
      "baseApiUrl",
      this.baseApiUrl);
  }

  ngOnInit() {
    const result = this.locationService.getLocation(
      this.baseApiUrl,
      this.query);

    this.searchLocations = result
      .pipe(map((locationResponse: LocationResponse) => locationResponse.locations));
  }

  displayTemperature: boolean;
  totalDays: number;
  searchLocations: Observable<Array<LocationItem>>; 
  baseApiUrl: string;
  query: string;
}
