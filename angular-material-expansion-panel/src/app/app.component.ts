import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-material-expansion-panel";

  // var for current step value storage
  step: number;
  // for the step to increment
  nextStep() {
    this.step++;
    console.log(this.step);
  }
  // for the step to decrement
  prevStep() {
    this.step--;
    console.log(this.step);
  }
  // to link the current step # from .ts to .html
  // to be able to change the panel to be expanded
  setStep(index: number) {
    this.step = index;
  }

  // handle inmput field values and display as JSON
  form = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.required]),
  });
  form1 = new FormGroup({
    country: new FormControl("", [Validators.required]),
  });
  form2 = new FormGroup({
    location: new FormControl("", [Validators.required]),
  });

  values: any;
  values1: any;
  values2: any;
  errorMsg = "";

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      console.log(this.form1.value);
      console.log(this.form2.value);

      this.values = this.form.value;
      this.values1 = this.form1.value;
      this.values2 = this.form2.value;

      JSON.stringify(this.values);
      JSON.stringify(this.values1);
      JSON.stringify(this.values2);
    } else {
      console.log("empty field");
      this.errorMsg = "Empty Field Exist";
    }
  }
}
