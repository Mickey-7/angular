import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//imported automatically once component was typed on the Routes after path
import { BarChartComponent } from "./components/bar-chart/bar-chart.component";
import { PieChartComponent } from "./components/pie-chart/pie-chart.component";
import { RadarChartComponent } from "./components/radar-chart/radar-chart.component";
import { DouhgnutChartComponent } from "./components/douhgnut-chart/douhgnut-chart.component";

const routes: Routes = [
  //seeting path fro each chart component
  { path: "bar-chart", component: BarChartComponent },
  { path: "doughnut-chart", component: DouhgnutChartComponent },
  { path: "radar-chart", component: RadarChartComponent },
  { path: "pie-chart", component: PieChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
