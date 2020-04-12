import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `
    <p>
      component2 works!
    </p>
  `,
  styles: [
  ]
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
