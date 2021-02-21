import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Alert } from './alert/alert';
import { ErrorResponse } from './ErrorResponse';
import { LocationItem } from './services/location/location-item';
import { LocationResponse } from './services/location/location-response';
import { LocationService } from './services/location/location.service';
import { Subject } from 'rxjs';

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
    this.getLocation = new Subject<LocationResponse>(); 
    this.baseApiUrl = nativeElement.getAttribute('baseapiurl');
    this.query = nativeElement.getAttribute('query');
    this.totalDays = nativeElement.getAttribute('totaldays');
    const value =  nativeElement.getAttribute('displaytemperature'); 
    
    this.displayTemperature = value === 'displayTemperature'
    this.alert = new Alert("", "");
    this.searchLocations = new Observable<Array<LocationItem>>();
    this.hasError = false;

    sessionStorage.setItem(
      "baseApiUrl",
      this.baseApiUrl);
  }

  ngOnInit() {
    
    const context = this;

    this.searchLocations = this.getLocation
        .pipe(
          map((locationResponse: LocationResponse) => locationResponse.locations),
          catchError(errorResponse => {
            context.handleError(
              errorResponse.error as ErrorResponse);
            return new Array(0); }));

    this.searchCity();
  }

  handleError(error: ErrorResponse) {
    this.alert.message = error.validationErrors[0];
    this.alert.type = "danger";
    this.hasError = true;
  }

  searchCity(newValue?: string) {
    if (newValue) {
      this.query = newValue;
    }

     this.locationService.getLocation(
      this.baseApiUrl,
      this.query,
      this.getLocation);
    
  }    
      

  alert: Alert;
  displayTemperature: boolean;
  totalDays: number;
  getLocation: Subject<LocationResponse>;
  searchLocations: Observable<Array<LocationItem>>; 
  baseApiUrl: string;
  query: string;
  hasError: boolean;
}
