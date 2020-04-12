import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pie-chart",
  template: `
    <p>
      pie-chart works!
    </p>
    <div style="display:block">
      <canvas
        baseChart
        [data]="pieChartData"
        [labels]="pieChartLabels"
        [chartType]="pieChartType"
      >
      </canvas>
    </div>
  `,
  styles: []
})
export class PieChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public pieChartData = [120, 150, 180, 90];

  public pieChartLabels = ["Sales Q1", "Sales Q2", "Sales Q3", "Sales Q4"];

  public pieChartType = "pie";
}
