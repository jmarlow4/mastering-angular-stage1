import { Injectable } from '@angular/core';
import { IntList } from '../interfaces/int-list';
import { listsData } from '../mocks/lists-data';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../../auth/services/auth.service';
import { IntUser } from '../../auth/interfaces/int-user';
import { Observable } from 'rxjs/Observable';
import { TasksService } from './tasks.service';

@Injectable()
export class ListsService {

  private _authState: IntUser;
  private _listsData$ = new BehaviorSubject<IntList>(null);
  private _currentListId$ = new BehaviorSubject<number>(null);

  constructor(
    private _authService: AuthService,
    private _tasksService: TasksService
  ) {
    this._listsData$.next(listsData);
    this._authService.authState
      .subscribe(authState => {
        this._authState = authState;
      });
  }

  get lists$(): Observable<IntList[]> {
    return this._listsData$.map( allLists => {
      return allLists.filter( list => {
        return list.userId === this._authState.id;
      });
    });
  }

  get currentListId$() {
    return this._currentListId$.asObservable();
  }

  setCurrentListId(listId: number) {
    this._currentListId$.next(listId);
  }

  retrieveList(listId: number): Observable<IntList> {
    return this.lists$.map( list => list[listId] );
  }

  createList(listTitle: string): number {
    const newListId = listsData.length;
    listsData.push({title: listTitle, userId: this._authState.id});
    this._listsData$.next(listsData);
    return newListId;
  }

  deleteList(listId: number) {
    this._tasksService.deleteTasks(listId);
    listsData.splice(listId, 1);
    this._listsData$.next(listsData);
  }

}
