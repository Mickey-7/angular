import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// imported manually
import { FormsModule } from "@angular/forms";
import { MustMatchDirectiveDirective } from "./must-match-directive.directive";

@NgModule({
  declarations: [AppComponent, MustMatchDirectiveDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
