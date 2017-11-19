import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatExpansionModule, MatIconModule, MatInputModule,
  MatSidenavModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent },
    ]),
  ],
  declarations: [HomeComponent, ListItemComponent, TaskComponent]
})
export class ListsModule {}
