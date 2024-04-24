import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dobValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const currentDate = new Date();
    const inputDate = new Date(control.value);

    
    if (
      !isNaN(inputDate.getTime()) &&
      inputDate.getFullYear() >= 1900 &&
      inputDate <= currentDate
    ) {
      return null; 
    } else {
      return { invalidDob: true }; 
    }
  };
}