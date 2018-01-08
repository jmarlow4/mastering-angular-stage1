import { Injectable } from '@angular/core';
import { IntList } from '../interfaces/int-list';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../../auth/services/auth.service';
import { IntUser } from '../../auth/interfaces/int-user';
import { Observable } from 'rxjs/Observable';
import { TasksService } from './tasks.service';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/concatMap';
import { DexieService } from '../../../services/dexie.service';
import Dexie from 'dexie';
import { from } from 'rxjs/observable/from';

@Injectable()
export class ListsService {

  private _authState: IntUser;
  private _dbLists: Dexie.Table<any, any>;
  private _listsData$ = new BehaviorSubject<IntList[]>(null);
  private _currentListId$ = new BehaviorSubject<string>(null);

  constructor(
    private _authService: AuthService,
    private _tasksService: TasksService,
    private _dexieService: DexieService
  ) {
    this._dbLists = this._dexieService.table('lists');
    this._authService.authState
      .subscribe(authState => {
        if (!!authState) {
          this._authState = authState;
          this.getListsFromDb(authState)
            .then( (lists: IntList[]) => {
              this._listsData$.next(lists);
            });
        }
      });
  }

  get lists$(): Observable<IntList[]> {
    return this._listsData$.asObservable();
  }

  getListsFromDb(authState): Promise<IntList[]> {
    return this._dbLists
      .where('userId')
      .equals(authState.uuid)
      .sortBy('order');
  }

  get currentListId$() {
    return this._currentListId$.asObservable();
  }

  setCurrentListId(listId: string) {
    this._currentListId$.next(listId);
  }

  retrieveList(listId: string): Observable<IntList> {
    return this.lists$.map( list => list[listId] );
  }

  createList(listTitle: string): any {
    return from(this._dbLists.put({
        title: listTitle,
        userId: this._authState.uuid,
        order: this._listsData$.getValue().length
      })
      .then( (newListId: string) => {
        this.getListsFromDb(this._authState)
          .then((lists: IntList[]) => {
            this._listsData$.next(lists);
          });
        return newListId;
      }));
  }

  deleteList(listId: string) {
    return this._tasksService.deleteTasks(listId)
      .mergeMap(() => from(this._dbLists.delete(listId)))
      .do( () => {
        this._listsData$.next(
          this._listsData$
            .getValue()
            .filter(list => list.uuid !== listId)
        );
      });
  }

}
