import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  Type,
} from "@angular/core";
import { LazyCompAComponent } from "./lazy-comp-a/lazy-comp-a.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "lazy-loading-component";

  // create constructor - 1
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  // create async load function - 2
  async load() {
    // clear the containerRef
    this.viewContainerRef.clear();
    // invoke and manually import  the lazyComponent
    const { LazyCompAComponent } = await import(
      "./lazy-comp-a/lazy-comp-a.component"
    );
    // insert the lazyComponent on the componentFactory which is
    // also inside the containerRef createComponent method
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(LazyCompAComponent)
    );
  }

  // invoke the load() function on button @ .html file - 3

  // now apppending lazyComponent in between tags - 5
  // create lazyCom variable of Promise Type invoking LazyCompAComponent
  lazyCom: Promise<Type<LazyCompAComponent>>;

  // create async load function - 6
  async loadBetween() {
    if (!this.lazyCom) {
      // invoke lazyCom & manually import  the lazyComponent
      this.lazyCom = import("./lazy-comp-a/lazy-comp-a.component").then(
        () => LazyCompAComponent
      );
    }
  }

  // invoke the loadBetween() function on button
  // & the component lazyCom on ng-template @ .html file - 7
}
