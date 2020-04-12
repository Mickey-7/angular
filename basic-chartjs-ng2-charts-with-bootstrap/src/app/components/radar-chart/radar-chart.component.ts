import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-radar-chart",
  template: `
    <p>
      radar-chart works!
    </p>
    <div style="display:block">
      <canvas
        baseChart
        [datasets]="radarChartData"
        [labels]="radarChartLabels"
        [chartType]="radarChartType"
      >
      </canvas>
    </div>
  `,
  styles: []
})
export class RadarChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public radarChartData = [
    { data: [120, 130, 180, 70], label: "2017" },
    { data: [90, 150, 200, 45], label: "2018" }
  ];

  public radarChartLabels = ["Q1", "Q2", "Q3", "Q4"];

  public radarChartType = "radar";
}
