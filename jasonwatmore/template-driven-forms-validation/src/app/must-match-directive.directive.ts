import { Directive, Input } from "@angular/core";
import {
  NG_VALIDATORS,
  FormGroup,
  ValidationErrors,
  Validator,
} from "@angular/forms";
import { MustMatch } from "./app.component";

@Directive({
  // changed from appMustMatchDirective to mustMatch
  selector: "[mustMatch]",
  // added manually
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MustMatchDirectiveDirective,
      multi: true,
    },
  ],
})
// manually implements Validator
export class MustMatchDirectiveDirective implements Validator {
  @Input("mustMatch") mustMatch: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors {
    console.log("directive");
    return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
  }

  constructor() {}
}
