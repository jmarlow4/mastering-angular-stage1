import { Injectable } from '@angular/core';
import { IntTask } from '../interfaces/int-task';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { IntList } from '../interfaces/int-list';
import Dexie from 'dexie';
import { DexieService } from '../../../services/dexie.service';
import { from } from 'rxjs/observable/from';

@Injectable()
export class TasksService {

  private _dbTasks: Dexie.Table<any, any>;
  private _tasksData$ = new BehaviorSubject<IntTask[]>(null);
  private _currentListId: string = null;

  constructor(
    private _dexieService: DexieService
  ) {
    this._dbTasks = this._dexieService.table('tasks');
  }

  get tasks$() {
    return this._tasksData$.asObservable();
  }

  setCurrentTasks(listId: string): Promise<IntTask[]> {
    this._currentListId = listId;
    return this._dbTasks
      .where('listId')
      .equals(listId)
      .sortBy('uuid')
      .then((tasks: IntTask[]) => {
        this._tasksData$.next(tasks);
        return tasks;
      });
  }

  deleteTasks(listId: string) {
    return from(this._dbTasks
      .where('listId')
      .equals(listId)
      .toArray())
      .map((tasks: IntTask[]) => {
        for (const task of tasks) {
          this._dbTasks.delete(task.uuid);
        }
      })
      .do( () => {
        this._tasksData$.next(null);
      });
  }

  createTask(task: IntTask) {
    task.dateCreated = new Date();
    task.dateCompleted = null;
    this._dbTasks.put(task).then( () => {
      this.setCurrentTasks(task.listId);
    });
  }

  deleteTask(taskId: string) {
    this._dbTasks.delete(taskId)
      .then( res => {
        this.setCurrentTasks(this._currentListId);
      });
  }
}
