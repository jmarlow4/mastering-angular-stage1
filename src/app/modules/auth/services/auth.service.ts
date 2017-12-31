import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { ActivatedRoute, Router } from '@angular/router';
import { IntUser } from '../interfaces/int-user';
import { DexieService } from '../../../services/dexie.service';
import Dexie from 'dexie';
import { from } from 'rxjs/observable/from';

@Injectable()
export class AuthService {

  private _authState: BehaviorSubject<IntUser> = new BehaviorSubject(null);

  private _dbUsers: Dexie.Table<any, any>;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _dexieService: DexieService
  ) {
    this._authState.next(JSON.parse(localStorage.getItem('auth')));
    this._dbUsers = this._dexieService.table('users');
  }

  get authState() {
    return this._authState.asObservable();
  }

  get authenticated() {
    return this._authState.map( authState => !!authState );
  }

  login(loginUser: IntUser): Observable<any> {
    return from(this._dbUsers.get({email: loginUser.email}))
      .delay(1000)
      .map( (dbUser: IntUser) => {
        if (!!dbUser
          && dbUser.email === loginUser.email
          && dbUser.password === loginUser.password
        ) {
          return dbUser;
        } else {
          throw Error('Incorrect email or password!');
        }
      })
      .do( (authState: IntUser) => {
        delete authState.password;
        this._authState.next(authState);
        localStorage.setItem('auth', JSON.stringify(authState));
        this._router.navigate(['/']);
      });
  }

  createUser(registerUser: IntUser) {
    delete registerUser.confirmPassword;
    return from(this._dbUsers.get({email: registerUser.email}))
      .delay(1000)
      .map( (dbUser: IntUser) => {
        if (!dbUser) {
          return true;
        } else {
          throw Error('Email already in use!');
        }
      })
      .mergeMap( (canRegister: boolean) => {
        if (canRegister) {
          return from(this._dbUsers.add(registerUser));
        }
      })
      .do( uuid => {
        delete registerUser.password;
        registerUser.uuid = uuid;
        this._authState.next(registerUser);
        localStorage.setItem('auth', JSON.stringify(registerUser));
        this._router.navigate(['/']);
        return registerUser;
      });
  }

  logout() {
    localStorage.removeItem('auth');
    this._authState.next(null);
    this._router.navigate(['/login']);
  }

}
