export class LocationResponse {
  constructor(woeId: number, title: string) {
    this.woeId = woeId;
    this.title = title;
  }

  woeId: number;
  title: string;
}
