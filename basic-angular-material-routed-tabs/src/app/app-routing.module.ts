import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component3Component } from './component3/component3.component';
import { Component2Component } from './component2/component2.component';


const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo:"/"},
  {path:"comp1", component: Component1Component},
  {path:"comp2", component: Component2Component},
  {path:"comp3", component: Component3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
