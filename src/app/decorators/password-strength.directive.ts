import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordStrength]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthDirective,
      multi: true,
    },
  ],
})
export class PasswordStrengthDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasMinLength = value.length >= 8;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /\d/.test(value);
    const hasSpecialChar = /[^A-Za-z0-9\s]/.test(value);

    const isValid = hasMinLength && hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar;

    if (!isValid) {
      return {
        passwordStrength: {
            requiredLength: !hasMinLength,
            uppercase: !hasUpperCase,
            lowercase: !hasLowerCase,
            numeric: !hasNumeric,
            specialChar: !hasSpecialChar,
        }
      };
    }

    return null;
  }
}
