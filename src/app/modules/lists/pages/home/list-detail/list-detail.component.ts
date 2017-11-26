import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IntTask } from '../../../interfaces/int-task';
import { TasksService } from '../../../services/tasks.service';
import { ListsService } from '../../../services/lists.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {

  tasks$ = new BehaviorSubject<IntTask[]>(null);

  constructor(
    private _tasksService: TasksService,
    private _listsService: ListsService,
  ) { }

  ngOnInit() {
    this.tasks$ = this._tasksService.tasks$;
    this._listsService.retrieveList(0).subscribe(
      list => console.log(list)
    );
  }

}
