import { Directive, Injectable } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    var pattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    var nameRe = new RegExp(pattern);
    const correct = nameRe.test(control.value);
    return correct ? null : { incorrectEmail: { value: control.value } };
  };
}

@Directive({
  selector: '[appEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailDirective, multi: true }]
})
@Injectable({ providedIn: 'root' })
export class EmailDirective implements Validator {
  forbiddenName = 'bob';
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName ? emailValidator()(control) : null;
  }
}