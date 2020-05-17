import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Option1Component } from "./components/option1/option1.component";
import { Option2Component } from "./components/option2/option2.component";
import { Option3Component } from "./components/option3/option3.component";
import { Option4Component } from "./components/option4/option4.component";
import { Option5Component } from "./components/option5/option5.component";
import { Option6Component } from "./components/option6/option6.component";
import { Option7Component } from "./components/option7/option7.component";

//
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  declarations: [
    AppComponent,
    Option1Component,
    Option2Component,
    Option3Component,
    Option4Component,
    Option5Component,
    Option6Component,
    Option7Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
