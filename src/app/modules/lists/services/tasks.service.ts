import { Injectable } from '@angular/core';
import { IntTask } from '../interfaces/int-task';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tasksData } from '../mocks/tasks-data';
import { Observable } from 'rxjs/Observable';
import { IntList } from '../interfaces/int-list';

@Injectable()
export class TasksService {

  private tasksData$ = new BehaviorSubject<IntTask[]>(null);

  constructor() {
    this.tasksData$.next(tasksData);
  }

  get tasks$() {
    return this.tasksData$.asObservable();
  }

  retrieveTasks(listId: number): Observable<IntTask[]> {
    return this.tasks$.map( allTasks => {
      return allTasks.filter( task => {
        return task.listId === +listId;
      });
    });
  }
}