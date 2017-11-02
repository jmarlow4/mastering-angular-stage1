import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  canActivate(): boolean {

    const authState = this._authService.authState;

    if (!authState) {
      this._router.navigate(['/login']);
    }
    return authState;
  }
}
