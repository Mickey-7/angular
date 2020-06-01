import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styles: [
    `
      #marg {
        margin: 0px 24px 0px;
      }
    `,
  ],
})
export class ButtonComponent implements OnInit {
  constructor() {}
  menu: any;
  nzDropdownMenu: any;
  ngOnInit(): void {}
}
