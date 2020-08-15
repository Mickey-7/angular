import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "template-driven-forms-validation";

  model: any = {};

  onSubmit() {
    alert("SUCCESS!! :-) \n\n" + JSON.stringify(this.model));
  }
}

// created manually
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    // return null if controls haven't initialised yet
    if (!control || !matchingControl) {
      console.log("error1");
      return null;
    }

    // return null if another validator has already found an error on the matchingControl
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      console.log("error2");
      return null;
    }

    // set error on matchingControl if validaion fails
    if (control.value !== matchingControl.value) {
      console.log("not matched");
      matchingControl.setErrors({ mustMatch: true });
    } else {
      console.log("matched");
      matchingControl.setErrors(null);
    }
  };
}
