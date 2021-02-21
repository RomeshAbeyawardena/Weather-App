export class Alert {
  static default: Alert = new Alert("", "",);

  constructor(
    type: string,
    message: string) {
    this.type = type;
    this.message = message;
  }

  type: string;
  message: string;
}
