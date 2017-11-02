import { Routes } from '@angular/router';
import { AuthGuardService } from './modules/auth/services/auth-guard.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthGuardService],
    component: HomeComponent
  },
  { path: '**', component: NotFoundComponent },
];
