import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidator {
    
    static compondValueValidate(control: AbstractControl): ValidationErrors {
        // const reg = /^[0-9]\d*(\.\d+)?$/;
        const reg = /^[0-9]\d*(\.\d+)?$/;
        if (!control.value) {
            return null;
        }
        const isValid = control.value && reg.test(control.value.toString());
        const message = {
            compondValueValidate: {
                message: 'This field only accepts numbers and this symbol:.'
            }
        };
        return isValid ? null : message;
    }

    static contactNumberValidation(control: AbstractControl): ValidationErrors {
        // const reg = /^[0-9-,()]{10,13}$/;
        // const reg=/^\d{10,13}$/;
        const tenDigitRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
        const thirteenDigitRegex = /^[0][1-9]\d{12}$|^[1-9]\d{12}$/;
        if (!control.value) {
            return null;
        }
        const isValid = control.value &&
            (tenDigitRegex.test(control.value.toString()) || thirteenDigitRegex.test(control.value.toString()));
        const message = {
            contactNumberValidation: {
                message: 'This field only accepts 10 or 13 digits numbers.'
            }
        };
        return isValid ? null : message;
    }

    static pinCodeValidation(control: AbstractControl): ValidationErrors {
        const reg = /^[0-9-]{6,6}$/;
        // const reg=/^[0][1-9]\d{5}$|^[1-9]\d{5}$/;
        if (!control.value) {
            return null;

        }
        const isValid = control.value && (reg.test(control.value.toString()));
        const message = {
            pinCodeValidation: {
                message: 'This field only accepts 6 digits numbers.'
            }
        };
        return isValid ? null : message;
    }

    static integer(control: AbstractControl): ValidationErrors {
        const num = Number(control.value);
        const reg = /^[0-9]\d*$/;
        const isValid = !isNaN(num) && reg.test(num.toString());
        const message = {
            integer: {
                message: 'Should be valid integer.' // Will changes the error defined in errors helper.
            }
        };
        return isValid ? null : message;
    }

    static addressValidation(control: AbstractControl): ValidationErrors {
        const reg = /^[a-zA-Z0-9-_@. ()&,$!':;/]+$/;
        if (!control.value) {
            return null;
        }
        const isValid = control.value && reg.test(control.value.toString());
        const message = {
            addressValidation: {
                message: 'This field only accepts alphanumeric characters and these symbols: - . ( ) _'
            }
        };
        return isValid ? null : message;
    }


}
