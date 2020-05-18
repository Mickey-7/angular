import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DemoMainComponent } from "./demo-main/demo-main.component";

const routes: Routes = [
  { path: "", component: DemoMainComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
