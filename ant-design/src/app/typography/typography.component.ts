import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-typography",
  templateUrl: "./typography.component.html",
  styles: [],
})
export class TypographyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // create string to be displayed & edited on .html
  editStr = "This is an editable text.";
  copyStr = "This is an editable & copyable text.";
}
