import { AbstractControl, NgModel, ValidatorFn, Validators } from '@angular/forms';

export class CustomValidators {

    static get isDecimalValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            let value = String(control.value);
            if (value == "0") return null;
            else return /^\d{1,10}(\.\d{1,2})?$/.test(value) ? null : { decimal: true };
            //else return /^\d{1,10}(\.\d{2})$/.test(value) ? null : { decimal: true };
            //return /^\d{1,10}(\.\d{1,2})?$/.test(value) ? null : { decimal: true };
        };
    }

    static get isPasswordSecureValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            let value = String(control.value);
            if (!value) return null;

            let array = [];
            array[0] = value.match(/[A-Z]/);
            array[1] = value.match(/[a-z]/);
            array[2] = value.match(/\d/);
            array[3] = value.match(/[!"#$%&'()*+-./:;<=>?@^_`{|}~]/);

            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i] ? 1 : 0;
            }

            return sum < 4 ? { secure: true } : null;
        }
    }

}

