import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rate",
  templateUrl: "./rate.component.html",
  styles: [],
})
export class RateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // array of tooltip values
  tooltips = ["terrible", "bad", "normal", "good", "wonderful"];
  value = 3;
}
