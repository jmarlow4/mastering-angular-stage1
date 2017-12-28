import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';
import { ActivatedRoute, Router } from '@angular/router';
import { IntUser } from '../interfaces/int-user';
import { DexieService } from '../../../services/dexie.service';

@Injectable()
export class AuthService {

  private _authState: BehaviorSubject<IntUser> = new BehaviorSubject(null);
  dummyUser: IntUser = {
    uuid: '7a01a19b-ea0a-4d4b-90c9-fa3d186d1462',
    email: 'jdoe@domain.com',
    password: 'pw1234'
  };

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this._authState.next(JSON.parse(localStorage.getItem('auth')));
  }

  get authState() {
    return this._authState.asObservable();
  }

  get authenticated() {
    return this._authState.map( authState => !!authState );
  }

  login(user: IntUser): Observable<any> {
    return of(user)
      .delay(1000)
      .map(res => {
        if (res.email === this.dummyUser.email) {
          if (res.password === this.dummyUser.password) {
            delete res.password;
            this._authState.next(res);
            localStorage.setItem('auth', JSON.stringify(res));
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
          const authObject = { email: res.email, id: 'derp', lists: [] };
          this._authState.next(authObject);
          localStorage.setItem('auth', JSON.stringify(authObject));
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
    this._authState.next(null);
    this._router.navigate(['/login']);
  }

}
