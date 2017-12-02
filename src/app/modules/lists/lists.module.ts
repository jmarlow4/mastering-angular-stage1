import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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
import { ListDetailComponent } from './pages/home/list-detail/list-detail.component';

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
      {
        path: '', component: HomeComponent, children: [
          { path: ':listId', component: ListDetailComponent }
        ]
      },
    ]),
  ],
  declarations: [
    HomeComponent,
    ListItemComponent,
    TaskComponent,
    ListsNavComponent,
    ListDetailComponent
  ],
  providers: [ListsService, TasksService]
})
export class ListsModule {}
