import
{ Component, ElementRef } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { catchError, mergeMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Alert } from './alert/alert';
import { Constants } from './constants';
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
    const value =  nativeElement.getAttribute('displaytemperature');
    const apiKey =  nativeElement.getAttribute('key');
    const baseApiUrl = nativeElement.getAttribute('appdata');

    this.getLocation = new Subject<LocationResponse>(); 
    
    this.query = nativeElement.getAttribute('query');
    this.totalDays = nativeElement.getAttribute('totaldays');
    
    this.displayTemperature = value === 'displayTemperature'
    this.alert = new Alert("", "");
    this.searchLocations = new Subject<Array<LocationItem>>();
    this.hasError = false;
    this.location = new LocationItem(0, "", "", new GeoLocation(0, 0));

    sessionStorage.setItem(
      Constants.apiBaseUrl,
      baseApiUrl);

    sessionStorage.setItem(
      Constants.apiKeyName,
      apiKey);
  }

  ngOnInit() {
    this.searchCity();
  }

  handleError(error: ErrorResponse): Array<LocationItem> {
    this.alert.message = error.validationErrors[0];
    this.alert.type = "danger";
    this.hasError = true;
    this.location = new LocationItem(0, "", "", new GeoLocation(0, 0));
    this.getLocation.subscribe();
    return new Array(0);
  }

  getWeatherData(
    context: AppComponent,
    locationResponse: LocationResponse): Observable<LocationResponse> {
      context.searchLocations.next(locationResponse.locations)
      return of(locationResponse);
  }

  searchCity(newValue?: string) {
    if (newValue) {
      this.query = newValue;
    }
    const context = this;
    this.hasError = false; 
     this.locationService
       .getLocations(
          this.query).pipe(
         catchError(httpError => {
          context
            .handleError(httpError.error);
          return new Array(0); } ),
         mergeMap(locationResponse => context
           .getWeatherData(context, locationResponse)),
         debounceTime(400),
         distinctUntilChanged())
       .subscribe();
    
  }    

  weatherDataLoaded(location: LocationItem) {
    this.location = location;
  }
  
  alert: Alert;
  displayTemperature: boolean;
  totalDays: number;
  getLocation: Observable<LocationResponse>;
  searchLocations: Subject<Array<LocationItem>>;
  location: LocationItem;
  query: string;
  hasError: boolean;
}
