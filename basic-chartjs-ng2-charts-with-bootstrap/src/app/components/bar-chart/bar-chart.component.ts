import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bar-chart",
  template: `
    <p>
      bar-chart works!
    </p>
    <div>
      <div style="display: block;">
        <canvas
          baseChart
          [datasets]="barChartData"
          [labels]="barChartLabels"
          [options]="barChartOptions"
          [legend]="barChartLegend"
          [chartType]="barChartType"
        ></canvas>
      </div>
    </div>
  `,
  styles: []
})
export class BarChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
  ];
  public barChartLabels = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "20012"
  ];
  public barChartOptions = { scaleShowVertivalLines: false, responsive: true };

  public barChartLegend = "true";

  public barChartType = "bar";
}
