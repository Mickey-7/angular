import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`nav {
    background-color: #424242;
    font-family: 'Lato', sans-serif;
  }
  .logo {
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 1.5em;
  }`]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title="Gallery"
}
