import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  // interpolation - {{}}
  title = "codevolution-component-interaction";

  // demo for []
  // display picture -
  // imageUrl will be set to src on .html file
  imageUrl = "https://i.picsum.photos/id/568/200/200.jpg";

  // demo for  ()
  // display simple count -
  // count & increment will be used on .html file
  count = 0;
  increment() {
    this.count = this.count + 1;
    // or
    // this.count += 1
    console.log(this.count);
  }

  // demo for [()]
  name = "";

  // split two way binding [] & ()
  userName = "";
  userName1 = "";
  greet(data) {
    this.userName1 = data;
    if (data === "mickey") {
      alert("welcome mickey");
    }
  }

  // getters & setters
  // storage var for the input
  private _customerName: string;
  get customerName(): string {
    return this._customerName;
  }
  set customerName(value: string) {
    this._customerName = value;
    if (value === "mickey") {
      alert("hello mickey");
    }
  }

  //ViewChild Decorator
  view = "";
  @ViewChild("viewRef") viewElementRef: ElementRef;
  // then implements AfterViewInit on this App class
  ngAfterViewInit() {
    this.viewElementRef.nativeElement.focus();
    console.log(this.viewElementRef);
  }
  // notice that after the page refresh..
  // the focus is already on the input field

  // parent & child with input decorator
  // App will be the parent
  // create child component  then type the need codes
  // the parent App will be passing boolean value to child
  // the child will render something based on that boolean value
  // invoke app-child on .html
  // create userLoggedIn var with boolean type
  // to be passed on <app-child></app-child> on .html
  userLoggedIn = true;
  // changed to false and notice change on web page
}
