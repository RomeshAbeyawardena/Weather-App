export class ConfigurationData {
  constructor(
    baseUrl: string,
    apiKey: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  baseUrl: string;
  apiKey: string;
}
