import { Component, OnInit } from "@angular/core";
import { ConfigService } from "./../config.service";
import { NgxPaginationModule } from "ngx-pagination";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  p: number = 1;
  count: number = 10;
  constructor(private configService: ConfigService) {}

  getData() {
    this.configService.getConfig().subscribe(resp => {
      resp.map((data, index) => (data["id"] = index+1));
      this.configData = resp;
    });
  }

  ngOnInit() {
    this.getData();
  }
}
