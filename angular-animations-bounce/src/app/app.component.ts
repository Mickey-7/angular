import { Component } from "@angular/core";
//
import { bounceAnimation } from "angular-animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  //
  animations: [bounceAnimation()],
})
export class AppComponent {
  title = "angular-animations-bounce";

  // single animation
  // var for animation initial state
  singleAnimationState = false;
  // animation method
  animate() {
    this.singleAnimationState = false;
    setTimeout(() => {
      this.singleAnimationState = true;
    }, 1);
  }

  // loop animation
  // var for animation initial state
  loading = false;
  // var for loop state
  animationState = false;
}
