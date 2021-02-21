import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../constants';
import { ConfigurationData } from './configuration-data';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }
  getHttpHeaders(
    configurationData: ConfigurationData): HttpHeaders {
    return new HttpHeaders()
      .set("x-api-key", configurationData.apiKey);
  }
  getServiceUrl(
    configurationData: ConfigurationData,
    url: string) {
    return configurationData.baseUrl + url;
  }
  getConfigurationData(): ConfigurationData {
    const baseUrl = sessionStorage.getItem(
      Constants.apiBaseUrl);

    const apiKey = sessionStorage.getItem(
      Constants.apiKeyName);

    if (!baseUrl) {
      throw 'BaseUrl not specified'
    }

    if (!apiKey) {
      throw 'Api Key not specified'
    }
    return new ConfigurationData(
      atob(baseUrl),
      atob(apiKey));
  }
}
