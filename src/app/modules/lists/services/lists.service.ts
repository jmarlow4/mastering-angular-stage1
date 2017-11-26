import { Injectable } from '@angular/core';
import { IntList } from '../interfaces/int-list';
import { listsData } from '../mocks/lists-data';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ListsService {

  private listsData$ = new BehaviorSubject<IntList[]>(null);

  constructor() {
    this.listsData$.next(listsData);
  }

  get lists$() {
    return this.listsData$;
  }

  retrieveList(id: number) {
    return this.lists$.map( lists => lists[id]);
  }

}
