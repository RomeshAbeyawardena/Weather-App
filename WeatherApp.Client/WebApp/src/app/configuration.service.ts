import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }
  getHttpHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set("x-api-key", "YzgzMzgyNjAtOTg3NC00ZTA4LWFiZDAtN2E3ZWZlM2Y2OTY4");
  }
}
