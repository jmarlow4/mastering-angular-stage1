import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  working = false;
  errorMessage: string = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public snackbar: MatSnackBar,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    this.working = true;
    this.authService.login(this.loginForm.value)
      .subscribe(
        user => {
          this.working = false;
          this.snackbar.open(
            'Logged in as ' + user.email,
            'dismiss',
            {duration: 4000, extraClasses: ['snackbar-success']});
        },
        error => {
          this.working = false;
          this.snackbar.open(
            'ERROR: ' + error.error,
            'dismiss',
            {duration: 4000, extraClasses: ['snackbar-error']});
        }
      );
  }

  isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/)) {
      return {isEmail: false};
    }
  }

}
