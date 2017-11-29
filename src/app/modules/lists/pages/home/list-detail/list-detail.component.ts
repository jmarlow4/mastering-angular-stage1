import { Component, OnInit } from '@angular/core';
import { IntTask } from '../../../interfaces/int-task';
import { TasksService } from '../../../services/tasks.service';
import { ListsService } from '../../../services/lists.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {

  tasks$: Observable<IntTask[]>;
  routeListId: number;

  constructor(
    private _tasksService: TasksService,
    private _listsService: ListsService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('on init called for list-detail');
    this._route.params.subscribe( params => {
      this.routeListId = params['listId'];
      this.tasks$ = this._tasksService.retrieveTasks(this.routeListId);
    });
  }

}
