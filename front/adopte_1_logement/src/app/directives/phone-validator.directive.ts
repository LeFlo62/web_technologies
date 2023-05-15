import { Directive } from '@angular/core';
import {AbstractControl, ValidationErrors} from "@angular/forms";

@Directive({
  selector: '[appPhoneValidator]'
})
export class PhoneValidatorDirective {
  validate(control: AbstractControl): ValidationErrors | null {
    const regex = /^(06|07)\d{8}$/;
    const value = control.value || '';
    const isValid = regex.test(value) && value.length === 10;

    if (!isValid) {
      return {invalidPhone: true};
    }

    return null;
  }
}
