import { Injectable } from '@angular/core';
import { IntTask } from '../interfaces/int-task';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { IntList } from '../interfaces/int-list';

@Injectable()
export class TasksService {

  private _tasksData$ = new BehaviorSubject<IntTask[]>(null);
  // private _tasksData = [...tasksData];

  constructor() {
    // this._tasksData$.next(this._tasksData);
  }

  get tasks$() {
    return this._tasksData$.asObservable();
  }

  retrieveTasks(listId: number): Observable<IntTask[]> {
    return this.tasks$.map( allTasks => {
      return allTasks.filter( task => {
        // return task.listId === +listId;
      });
    });
  }

  deleteTasks(listId: number) {
    // this._tasksData = this._tasksData.filter(task => {
    //   return task.listId !== listId;
    // });
    // this._tasksData$.next(this._tasksData);
  }
}
