import { Component, OnInit } from "@angular/core";
import { ConfigService } from "./../config.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  p: number = 1;
  count: number = 10;
  configData: Array<object> = [];
  response: Array<object> = [];
  propertyData: Array<string> = [];

  constructor(private configService: ConfigService) {}

  getData() {
    this.configService.getConfig().subscribe(resp => {
      console.log(typeof resp);
      this.response = resp;
      this.response.map((data, index) => (data["id"] = index + 1));
      this.configData = this.response;

      this.response.map(data => {
        if ("country" in data) {
          if (data["country"] !== "") {
            if (!this.propertyData.includes(data["country"]))
              this.propertyData.push(data["country"]);
          } else if (
            data["country"] === "" &&
            !this.propertyData.includes("Others")
          )
            this.propertyData.push("Others");
        }
      });
    });
  }

  ngOnInit() {
    this.getData();
  }
}
