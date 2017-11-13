import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  signupForm: FormGroup;
  working = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose([
        Validators.required,
        this.isEqualPassword.bind(this)
      ])],
    });
  }

  onSignUp() {
    this.working = true;
    this.authService.createUser(this.signupForm.value)
      .subscribe(
        (auth) => {
          this.working = false;
        },
        err => {
          console.error(err);
        });
  }

  isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/)) {
      return {noEmail: true};
    }
  }

  isEqualPassword(control: FormControl): {[s: string]: boolean} {
    if (!this.signupForm) {
      return {passwordsNotMatch: true};
    }
    if (control.value !== this.signupForm.controls['password'].value) {
      return {passwordsNotMatch: true};
    }
  }

}
