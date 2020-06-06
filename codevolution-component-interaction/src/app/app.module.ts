import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// to use ngModel
import { FormsModule } from "@angular/forms";
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
