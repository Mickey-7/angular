import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//imported manually
import { ChartsModule } from "ng2-charts";
//automatically created once npx ng g c was initialized
import { BarChartComponent } from "./components/bar-chart/bar-chart.component";
import { DouhgnutChartComponent } from "./components/douhgnut-chart/douhgnut-chart.component";
import { PieChartComponent } from "./components/pie-chart/pie-chart.component";
import { RadarChartComponent } from "./components/radar-chart/radar-chart.component";

@NgModule({
  declarations: [
    AppComponent,
    //automatically created once npx ng g c was initialized
    BarChartComponent,
    DouhgnutChartComponent,
    PieChartComponent,
    RadarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //imported manually
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
