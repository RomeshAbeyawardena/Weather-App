export class ErrorResponse {
  constructor(validationErrors: Array<string>) {
    this.validationErrors = validationErrors;
  }

  validationErrors: Array<string>;
}
