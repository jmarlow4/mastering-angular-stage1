import { Injectable } from '@angular/core';
import { IntList } from '../interfaces/int-list';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../../auth/services/auth.service';
import { IntUser } from '../../auth/interfaces/int-user';
import { Observable } from 'rxjs/Observable';
import { TasksService } from './tasks.service';
import { of } from 'rxjs/observable/of';
import { DexieService } from '../../../services/dexie.service';
import Dexie from 'dexie';

@Injectable()
export class ListsService {

  private _authState: IntUser;
  private _dbLists: Dexie.Table<any, any>;
  private _listsData$ = new BehaviorSubject<IntList[]>(null);
  private _currentListId$ = new BehaviorSubject<number>(null);

  constructor(
    private _authService: AuthService,
    private _tasksService: TasksService,
    private _dexieService: DexieService
  ) {
    this._dbLists = this._dexieService.table('lists');
    this._authService.authState
      .subscribe(authState => {
        this._authState = authState;
        this._dbLists
          .where('userId')
          .equals(authState.uuid)
          .sortBy('uuid')
          .then( (lists: IntList[]) => {
            this._listsData$.next(lists);
            console.log(lists);
          });
      });
  }

  get lists$(): Observable<IntList[]> {
    return this._listsData$.asObservable();
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
    // const newListId = listsData.length;
    // listsData.push({title: listTitle, userId: this._authState.id});
    // this._listsData$.next(listsData);
    // return newListId;
    return 1;
  }

  deleteList(listId: number) {
    // this._tasksService.deleteTasks(listId);
    // listsData.splice(listId, 1);
    // this._listsData$.next(listsData);
  }

}
