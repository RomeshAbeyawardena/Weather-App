import { LocationItem } from './location-item';

export class LocationResponse {
  constructor() {
    this.locations = new Array(0);
  }

  locations: Array<LocationItem>;
}
