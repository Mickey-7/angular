import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//automaticcaly imported once created
import { NavbarComponent } from "./components/navbar/navbar.component";
import { UsersComponent } from "./components/users/users.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
//manually imported for [(ngModel)]
import { FormsModule } from "@angular/forms";
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    //automaticcaly imported once created
    NavbarComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //need to import this to user [(ngModel)]
    FormsModule
  ],
  //need to import the service
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
