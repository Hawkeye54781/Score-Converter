import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validInput(control: AbstractControl): ValidationErrors | null {
  if (control.value <= 4 && control.value >= 0) {
    return null;
  }
  return { greaterThenFour: true };
}

