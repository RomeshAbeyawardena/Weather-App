import { Input, Component, ElementRef } from '@angular/core';
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
    let nativeElement = eltRef.nativeElement;

    this.baseApiUrl = nativeElement.getAttribute('baseapiurl');
    this.query = nativeElement.getAttribute('query');
  }
 
  ngOnInit(): void {
    const result = this.locationService.getLocation(
      this.baseApiUrl,
      this.query);

    result.then(a => { console.log(a); });
  }

  baseApiUrl: string;
  query: string;
}
