import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatProgressSpinnerModule, MatSnackBarModule,
  MatTabsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: AuthPageComponent }
    ]),
    FlexLayoutModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    AuthPageComponent,
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthGuardService],
    };
  }
}
