import { LocationItem } from './location-item';

export class LocationResponse {
  default: LocationResponse = new LocationResponse(new Array(0));
  constructor(locations: Array<LocationItem>) {
    this.locations = locations;
  }

  locations: Array<LocationItem>;
}
