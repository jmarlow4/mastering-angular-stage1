import { Injectable } from '@angular/core';
import { IntList } from '../interfaces/int-list';
import { listsData } from '../mocks/lists-data';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../../auth/services/auth.service';
import { IntUser } from '../../auth/interfaces/int-user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListsService {

  private _authState: IntUser;
  private _listsData$ = new BehaviorSubject<IntList[]>(null);

  constructor(private _authService: AuthService) {
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

  retrieveList(listId: number): Observable<IntList> {
    return this.lists$.map( list => list[listId] );
  }

}
