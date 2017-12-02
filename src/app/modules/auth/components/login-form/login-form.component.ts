import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthForm } from '../../classes/auth-form';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends AuthForm implements OnInit {

  loginForm: FormGroup;
  working = false;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    public snackbar: MatSnackBar
  ) { super(snackbar); }

  ngOnInit() {
    this.loginForm = this._fb.group(
      { email: ['', Validators.compose(
        [
          Validators.required,
            this.isEmail
        ])],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    this.working = true;
    this._authService.login(this.loginForm.value)
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
        },
        () => {
          console.info('login completed!');
        }
      );
  }

}
