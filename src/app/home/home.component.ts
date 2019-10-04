import { Component, OnInit } from "@angular/core";
import { ConfigService } from "./../config.service";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  p: number = 1;
  count: number = 10;
  configData: Array<object> = [];
  response: Array<any> = [];
  propertyData: Array<string> = ["All"];
  data: Array<any> = [];

  constructor(private configService: ConfigService) {}

  getData() {
    this.configService.getConfig().subscribe(resp => {
      this.response = resp;
      this.response.map((data, index) => (data["id"] = index + 1));
      this.configData = this.response;
      this.data = JSON.parse(JSON.stringify(resp));

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

  getFilteredData(filterItem) {
    if (filterItem === "All") {
      console.log("all is clicked");
      return this.data;}
    this.data = this.configData.filter(data => {
      // console.log(filterItem, data["country"]);
      if (filterItem === "Others") return data["country"] === "";
      else return data["country"] === filterItem.trim();
    });
  }

  ngOnInit() {
    this.getData();
  }
}
