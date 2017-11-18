import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this._authState.next({
      email: localStorage.getItem('auth')
    });
  }

  get authState() {
    return this._authState;
  }

  get authenticated() {
    return this._authState.map( authState => !!authState.email );
  }

  login(user: IntUser): Observable<any> {
    return of(user)
      .delay(1000)
      .map(res => {
        if (res.email === this.dummyUser.email) {
          if (res.password === this.dummyUser.password) {
            this._authState.next({email: res.email});
            localStorage.setItem('auth', res.email);
            return res;
          } else {
            throw Observable.throw('Incorrect password!');
          }
        } else {
          throw Observable.throw('User not found!');
        }
      })
      .do( authState => {
        this._router.navigate(['/']);
      });
  }

  createUser(user: IntUser) {
    return of(user)
      .delay(1000)
      .map(res => {
        if (res.email !== this.dummyUser.email) {
          this._authState.next({email: res.email});
          localStorage.setItem('auth', res.email);
          return res;
        } else {
          throw Observable.throw('Email already in use!');
        }
      })
      .do( authState => {
        this._router.navigate(['/']);
      });
  }

  logout() {
    localStorage.removeItem('auth');
    this._authState.next({email: null});
    this._router.navigate(['/login']);
  }

}
