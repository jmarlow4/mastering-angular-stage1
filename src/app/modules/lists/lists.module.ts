import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatExpansionModule, MatIconModule, MatInputModule, MatListModule,
  MatSidenavModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TaskComponent } from './components/task/task.component';
import { ListsService } from './services/lists.service';
import { TasksService } from './services/tasks.service';
import { ListsNavComponent } from './pages/home/lists-nav/lists-nav.component';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent },
    ]),
  ],
  declarations: [HomeComponent, ListItemComponent, TaskComponent, ListsNavComponent],
  providers: [ListsService, TasksService]
})
export class ListsModule {}
