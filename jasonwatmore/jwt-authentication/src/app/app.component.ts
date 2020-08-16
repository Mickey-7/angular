import { Component } from "@angular/core";
import { User } from "./_models/user";
import { AuthenticationService } from "./_services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "jwt-authentication";

  ngOnInit() {
    console.log("APP_COMPONENT");
  }

  currentUser: User;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.currentUser.subscribe((x) => {
      this.currentUser = x;
    });
  }

  logout() {
    console.log("logout() - APP_COMPONENT");
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
