import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthForm } from '../../classes/auth-form';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent extends AuthForm implements OnInit {

  registerForm: FormGroup;
  working = false;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    public snackbar: MatSnackBar,
  ) { super(snackbar); }

  ngOnInit() {
    this.registerForm = this._fb.group(
      { email: ['', Validators.compose(
        [
          Validators.required,
          this.isEmail
        ])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose(
        [
          Validators.required,
          this.isEqualPassword.bind(this)
        ])],
    });
  }

  onSignUp() {
    this.working = true;
    this._authService.createUser(this.registerForm.value)
      .subscribe(
        user => {
          this.working = false;
          this.openSnackbar(
            'Logged in as ' + user.email,
            'snackbar-success');
        },
        error => {
          this.working = false;
          this.openSnackbar(
            'ERROR: ' + error.error,
            'snackbar-error');
        });
  }

  isEqualPassword(control: FormControl): {[s: string]: boolean} {
    if (!this.registerForm) {
      return {passwordsNotMatch: true};
    }
    if (control.value !== this.registerForm.controls['password'].value) {
      return {passwordsNotMatch: true};
    }
  }

}
