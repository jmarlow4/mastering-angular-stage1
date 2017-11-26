import { Injectable } from '@angular/core';
import { IntTask } from '../interfaces/int-task';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tasksData } from '../mocks/tasks-data';

@Injectable()
export class TasksService {

  private tasksData$ = new BehaviorSubject<IntTask[]>(null);

  constructor() {
    this.tasksData$.next(tasksData);
  }

  get tasks$() {
    return this.tasksData$;
  }
}
