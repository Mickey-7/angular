import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { User } from "../_models/user";
import { first } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {}

  loading = false;
  users: User[];
  ngOnInit(): void {
    console.log("HOME_COMPONENT");
    this.loading = true;
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.loading = false;
        this.users = users;
      });
  }
}
