import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  ActivatedRouteSnapshot, CanActivate, Router,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('route', route);
    console.log('state', state);
    const authState = this._authService.authState;

    if (!authState) {
      this._router.navigate(['/login']);
    }
    return authState;
  }
}
