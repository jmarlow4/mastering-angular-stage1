import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IntTask } from '../../../interfaces/int-task';
import { TasksService } from '../../../services/tasks.service';
import { ListsService } from '../../../services/lists.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListDetailComponent implements OnInit {

  tasks$: Observable<IntTask[]>;
  routeListId: number;
  currentTaskId: number;

  constructor(
    private _tasksService: TasksService,
    private _listsService: ListsService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe( params => {
      this.routeListId = params['listId'];
      this.tasks$ = this._tasksService.retrieveTasks(this.routeListId);
    });
  }

  taskOpened(eventId) {
    this.currentTaskId = eventId;
  }

}