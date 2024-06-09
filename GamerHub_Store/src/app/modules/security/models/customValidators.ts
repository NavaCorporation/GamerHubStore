import { group } from "@angular/animations";
import { Validators, AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export class CustomValidators extends Validators {
    static noIgual(password: string, confirmPassword: string): ValidatorFn {
        return (group: AbstractControl): ValidationErrors | null => {
            const passwordControl = group.get(password);
            const confirmPasswordControl = group.get(confirmPassword);
            return passwordControl?.value === confirmPasswordControl?.value ? null : {
                noIgual: true
            }
        };
    }
}