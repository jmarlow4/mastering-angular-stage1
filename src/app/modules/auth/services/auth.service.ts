import { Injectable } from '@angular/core';

export interface IntUser {
  username: string;
  password: string;
}

@Injectable()
export class AuthService {

  private _authState = '';
  dummyUser: IntUser = {
    username: 'JohnDoe',
    password: 'pw1234'
  };

  constructor() {
    this._authState = localStorage.getItem('auth');
  }

  get authState() {
    return !!this._authState;
  }

  login(user: IntUser): boolean {

    if (user.username === this.dummyUser.username
      && user.password === this.dummyUser.password) {

      localStorage.setItem('auth', user.username);

      this._authState = user.username;

      return true;
    }
    return false;
  }

  logout() {

    localStorage.removeItem('auth');

    this._authState = '';
  }

}
