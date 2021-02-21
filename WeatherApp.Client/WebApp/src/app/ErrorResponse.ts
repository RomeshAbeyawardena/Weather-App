export class ErrorResponse {
  static default: ErrorResponse = new ErrorResponse(new Array(0));

  constructor(validationErrors: Array<string>) {
    this.validationErrors = validationErrors;
  }

  validationErrors: Array<string>;
}
