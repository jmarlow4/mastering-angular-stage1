import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IntTask } from '../../../interfaces/int-task';
import { TasksService } from '../../../services/tasks.service';
import { ListsService } from '../../../services/lists.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListDetailComponent implements OnInit {

  tasks$: Observable<IntTask[]>;
  routeListId: string;
  currentTaskId: string;

  constructor(
    private _tasksService: TasksService,
    private _listsService: ListsService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tasks$ = this._tasksService.tasks$;
    this._route.params.subscribe(params => {
      this.routeListId = params['listId'];
      this.currentTaskId = null;
      this._listsService.setCurrentListId(this.routeListId);
      this._tasksService.setCurrentTasks(this.routeListId);
    });
  }

  taskOpened(eventId) {
    this.currentTaskId = eventId;
  }

  handleDrop(allTasks: IntTask[]) {
    for (const taskIndex in allTasks) {
      allTasks[taskIndex].order = +taskIndex;
      this._tasksService.updateTask(allTasks[taskIndex]);
    }
  }

}
