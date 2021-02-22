import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { LocationItem } from '../services/location/location-item';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {
   
  constructor() {
    this.value = "";
    this.searchIcon = faSearch;
    this.searchCity = new EventEmitter<string>();
    this.data = new Array(0);
  }
   
  searchLocation() {
    this.searchCity.emit(
      this.value);
  }

  ngOnInit(): void {
  }

  selectEvent(item: LocationItem) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any){
    // do something when input is focused
  }

  data: Array<LocationItem>;
  searchIcon: IconDefinition;
  @Input() value: string;
  @Output() searchCity: EventEmitter<string>;
}
