import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { Alert } from './alert/alert';
import { ErrorResponse } from './ErrorResponse';
import { GeoLocation } from './services/location/GeoLocation';
import { LocationItem } from './services/location/location-item';
import { LocationResponse } from './services/location/location-response';
import { LocationService } from './services/location/location.service';

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
    this.searchLocations = new Subject<Array<LocationItem>>();
    this.hasError = false;
    this.location = new LocationItem(0, "", "", new GeoLocation(0, 0));

    sessionStorage.setItem(
      "baseApiUrl",
      this.baseApiUrl);
  }

  ngOnInit() {
    
    const context = this;

      this.getLocation
        .pipe(catchError(httpError => {
          context
            .handleError(httpError.error);
          return new Array(0); } ))
        .subscribe({
          next(locationResponse: LocationResponse) {
            context.searchLocations.next(locationResponse.locations);
          }
      });


    //this.searchLocations = this.getLocation
    //    .pipe(
    //      map((locationResponse: LocationResponse) => locationResponse.locations),
    //      catchError(errorResponse => {
    //        context.handleError(
    //          errorResponse.error as ErrorResponse);
    //        return new Array(0); }))
    
    this.searchCity();
  }

  handleError(error: ErrorResponse): Array<LocationItem> {
    console.log(error);
    this.alert.message = error.validationErrors[0];
    this.alert.type = "danger";
    this.hasError = true;

    return new Array(0);
  }

  searchCity(newValue?: string) {
    if (newValue) {
      this.query = newValue;
    }

     this.locationService.getLocations(
      this.baseApiUrl,
      this.query,
      this.getLocation);
    
  }    

  weatherDataLoaded(location: LocationItem) {
    console.log(location);
    this.location = location;
  }

  alert: Alert;
  displayTemperature: boolean;
  totalDays: number;
  getLocation: Subject<LocationResponse>;
  searchLocations: Subject<Array<LocationItem>>;
  location: LocationItem;
  baseApiUrl: string;
  query: string;
  hasError: boolean;
}
