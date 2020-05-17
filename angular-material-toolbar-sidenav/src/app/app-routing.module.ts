import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Option1Component } from "./components/option1/option1.component";
import { Option2Component } from "./components/option2/option2.component";
import { Option3Component } from "./components/option3/option3.component";
import { Option4Component } from "./components/option4/option4.component";
import { Option5Component } from "./components/option5/option5.component";
import { Option6Component } from "./components/option6/option6.component";
import { Option7Component } from "./components/option7/option7.component";

const routes: Routes = [
  { path: "", component: Option1Component },
  { path: "opt2", component: Option2Component },
  { path: "opt3", component: Option3Component },
  { path: "opt4", component: Option4Component },
  { path: "opt5", component: Option5Component },
  { path: "opt6", component: Option6Component },
  { path: "opt7", component: Option7Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
