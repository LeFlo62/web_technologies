import {Directive} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[emailValidator][ngModel]',
})
export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{8,1024}$/;
    const value = control.value || '';
    const isValid = regex.test(value);

    if (!isValid) {
      return {invalidPassword: true};
    }

    return null;
  }
}
