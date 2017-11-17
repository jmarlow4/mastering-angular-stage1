import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/auth/services/auth.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  authenticated: Observable<boolean>;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.authenticated = this._authService.authenticated;
  }

  onLogout() {
    this._authService.logout();
  }

}
