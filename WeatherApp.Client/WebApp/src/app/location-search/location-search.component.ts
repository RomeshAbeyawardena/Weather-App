import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

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
  }
   
  searchLocation() {
    this.searchCity.emit(
      this.value);
  }

  ngOnInit(): void {
  }

  searchIcon: IconDefinition;
  @Input() value: string;
  @Output() searchCity: EventEmitter<string>;
}
