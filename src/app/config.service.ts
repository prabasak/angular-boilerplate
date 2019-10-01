import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ConfigService {
  baseUrl = "http://localhost:4200/"
  configUrl = "../assets/data.json";
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get(this.baseUrl + this.configUrl);
  }
}