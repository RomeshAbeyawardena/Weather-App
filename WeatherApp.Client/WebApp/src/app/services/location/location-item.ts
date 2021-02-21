import { GeoLocation } from './GeoLocation';

export class LocationItem {

  static default: LocationItem = new LocationItem(0, "", "", GeoLocation.default)
  constructor(
    id: number,
    name: string,
    type: string,
    geoLocation: GeoLocation) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.geoLocation = geoLocation;
  }

  id: number;
  name: string;
  type: string;
  geoLocation: GeoLocation
}
