import { Input, Component, ElementRef } from '@angular/core';
import { LocationItem } from './location-item';
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
    this.searchLocations = new Array(0);

    const result = this.locationService.getLocation(
      this.baseApiUrl,
      this.query);

    result.then(a => { this.searchLocations = a.locations });
  }
 
  searchLocations: Array<LocationItem> 
  baseApiUrl: string;
  query: string;
}
