import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  template: `
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" routerLink="/users">Users</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/user-detail">User-Detail</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
