import { FormControl } from '@angular/forms';
import { IntUser } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';

export class AuthForm {

  constructor(
    public snackbar: MatSnackBar
  ) {}

  isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/)) {
      return {noEmail: true};
    }
  }

  openSnackbar(message: string, styleClass: string) {
    this.snackbar.open(
      message,
      'dismiss',
      {duration: 4000, extraClasses: [styleClass]});
  }
}
