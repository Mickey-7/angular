import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterialRoutedTabs';

  //1
  navLinks: any[];
  //2
  activeLinkIndex = -1;

  //3 invoke router
  constructor(private router: Router){
    this.navLinks = [
      {
        label : "1st Component",
        path : "./comp1",
        index : 0
      },
      {
        label : "2nd Component",
        path : "./comp2",
        index : 1
      },
      {
        label : "3rd Component",
        path : "./comp3",
        index : 2
      }
    ]
  }

  //4
  ngOnInit():void{
    this.router.events.subscribe((res)=> {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find(tab=>tab.path === "."+this.router.url)
      );
    });
  }

}


