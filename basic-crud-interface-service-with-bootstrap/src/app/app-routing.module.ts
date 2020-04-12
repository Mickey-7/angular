import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//automatically imported once component was initialized on Routes
import { UsersComponent } from "./components/users/users.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";

const routes: Routes = [
  //code this
  { path: "users", component: UsersComponent },
  { path: "user-detail", component: UserDetailComponent },
  { path: "", redirectTo: "users", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
