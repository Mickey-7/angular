import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styles: [],
})
export class ChildComponent implements OnInit {
  // invoke @Input decorator
  // loggedIn is used on .html
  @Input("loggedIn") loggedIn: boolean;
  // the child is expecting input from parent App

  constructor() {}

  ngOnInit(): void {}
}
