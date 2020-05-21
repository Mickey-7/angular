import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  //will indicate the icon current step and change the icon to check
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class AppComponent {
  title = "anuglar-material-stepper";

  // code for step by step validation
  isLinear = true;
  form = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
  });
  form1 = new FormGroup({
    lastName: new FormControl("", [Validators.required]),
  });
  //for optional step
  isOptional = true;
  form2 = new FormGroup({
    age: new FormControl("", [Validators.required]),
  });

  // the code below is equivalent of the code for validation above
  // only using FormBuilder  - still need isLinear var only

  // form: FormGroup;
  // form1: FormGroup;
  // constructor(private formBuilder: FormBuilder) {
  //   this.form = this.formBuilder.group({
  //     firstName: ["", Validators.required],
  //   });
  //   this.form1 = this.formBuilder.group({
  //     lastName: ["", Validators.required],
  //   });
  //   this.form2 = this.formBuilder.group({
  //     age: ["", Validators.required],
  //   });
  // }

  binding: any;
  binding1: any;
  binding2: any;

  submit() {
    console.log(this.form.value);
    console.log(this.form1.value);
    console.log(this.form2.value);

    this.binding = this.form.value;
    JSON.stringify(this.binding);
    this.binding1 = this.form1.value;
    JSON.stringify(this.binding1);
    this.binding2 = this.form2.value;
    JSON.stringify(this.binding2);
  }
}
