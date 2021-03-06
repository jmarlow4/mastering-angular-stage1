import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
MatButtonModule,
MatExpansionModule, MatIconModule, MatInputModule, MatListModule,
MatSidenavModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { DndModule } from 'ng2-dnd';

import { HomeComponent } from './pages/home/home.component';
import { TaskComponent } from './pages/home/list-detail/task/task.component';
import { ListsService } from './services/lists.service';
import { TasksService } from './services/tasks.service';
import { ListsNavComponent } from './pages/home/lists-nav/lists-nav.component';
import { ListDetailComponent } from './pages/home/list-detail/list-detail.component';
import { ListLinkComponent } from './pages/home/lists-nav/list-link/list-link.component';
import { CreateTaskFormComponent} from './pages/home/list-detail/create-task-form/create-task-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    DndModule.forRoot(),
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
    TaskComponent,
    ListsNavComponent,
    ListDetailComponent,
    ListLinkComponent,
    CreateTaskFormComponent
  ],
  providers: [ListsService, TasksService]
})
export class ListsModule {}
