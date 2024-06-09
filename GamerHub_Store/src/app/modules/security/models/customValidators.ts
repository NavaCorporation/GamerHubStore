import { FormGroup } from "@angular/forms";
import { Validators, AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export class CustomValidators extends Validators {
    static noIgual(password: string, confirmPassword: string): ValidatorFn {
        return (group: AbstractControl): ValidationErrors | null => {
            const formGroup = group as FormGroup;
            const passwordControl = formGroup.get(password);
            const confirmPasswordControl = formGroup.get(confirmPassword);

            if (!passwordControl || !confirmPasswordControl) {
                return null;
            }

            const isMatch = passwordControl.value === confirmPasswordControl.value;
            if (!isMatch) {
                confirmPasswordControl.setErrors({ noIgual: true });
            } else {
                confirmPasswordControl.setErrors(null);
            }

            return null;
        };
    }
}