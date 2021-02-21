export class GeoLocation {
  static default: GeoLocation = new GeoLocation(0, 0);

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  latitude: number;
  longitude: number;
}
