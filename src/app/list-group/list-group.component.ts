import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-list-group",
  templateUrl: "./list-group.component.html",
  styleUrls: ["./list-group.component.scss"]
})
export class ListGroupComponent implements OnInit {
  @Input() propertyData: object;
  @Output() filteredData = new EventEmitter<string>();

  constructor() {}

  filterData($event) {
    this.filteredData.emit($event.target.text);
  }

  ngOnInit() {}
}
