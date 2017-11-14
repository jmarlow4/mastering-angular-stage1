import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  working = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
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
      .subscribe( user => console.log('login user', user),
          error => console.log('error on login!', error));
  }

  isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/)) {
      return {noEmail: true};
    }
  }

}
