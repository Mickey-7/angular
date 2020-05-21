import { Component } from "@angular/core";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-material-badge-tooltip";

  // storage link to display the selected date on .html file
  selectedDate: Date;
  // catching the selected date
  selectDate(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.selectedDate = event.value;
  }

  // initla count - display onm badge
  count = 0;
  // method to add count to badge
  addCount() {
    this.count++;
    console.log(this.count);
  }
}
