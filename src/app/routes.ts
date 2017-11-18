import { Routes } from '@angular/router';
import { AuthGuardService } from './modules/auth/services/auth-guard.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  {
    path: 'lists',
    canActivate: [AuthGuardService],
    loadChildren: './modules/lists/lists.module#ListsModule',
  },
  { path: '**', component: NotFoundComponent },
];
