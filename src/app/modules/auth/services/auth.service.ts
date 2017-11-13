import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';

export interface IntUser {
  email: string;
  password?: string;
}

@Injectable()
export class AuthService {

  private _authState: BehaviorSubject<IntUser> = new BehaviorSubject(null);
  dummyUser: IntUser = {
    email: 'jdoe@domain.com',
    password: 'pw1234'
  };

  constructor() {
    this._authState.next({
      email: localStorage.getItem('auth')
    });
  }

  get authState() {
    return this._authState;
  }

  login(user: IntUser): Observable<any> {
    return of(user).map(res => {
      console.log('resolve', res);
      return res;
    })
      .delay(1000)
      .take(1);
  }

  createUser(user: IntUser) {
    return new Observable(resolve => {
      console.log('resolve', resolve);
      return resolve;
    })
      .delay(1000)
      .take(1);
  }

  logout() {

    localStorage.removeItem('auth');

    this._authState.next(null);
  }

}
