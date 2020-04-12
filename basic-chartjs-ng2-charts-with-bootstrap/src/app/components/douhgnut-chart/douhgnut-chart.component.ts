import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-douhgnut-chart",
  template: `
    <p>
      douhgnut-chart works!
    </p>
    <div style="display:block">
      <canvas
        baseChart
        [data]="doughnutChartData"
        [labels]="doughnutChartLabels"
        [chartType]="doughnutChartType"
      >
      </canvas>
    </div>
  `,
  styles: []
})
export class DouhgnutChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public doughnutChartData = [120, 150, 180, 90];

  public doughnutChartLabels = ["Sales Q1", "Sales Q2", "Sales Q3", "Sales Q4"];

  public doughnutChartType = "doughnut";
}
