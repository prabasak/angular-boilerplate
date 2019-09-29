import { Injectable } from "@angular/core";

@Injectable()
export class configuration {
  public server = "http://localhost:4200/";
  public apiUrl = "../../data/data.json";
  public serverWithUrl = this.server + this.apiUrl;
}
