import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../../services/lists.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IntList } from '../../../interfaces/int-list';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { DexieService } from '../../../../../services/dexie.service';
import Dexie from 'dexie';

@Component({
  selector: 'app-lists-nav',
  templateUrl: './lists-nav.component.html',
  styleUrls: ['./lists-nav.component.scss']
})
export class ListsNavComponent implements OnInit {

  dbUsers: Dexie.Table<any, string>;
  lists$: Observable<IntList[]>;
  currentListId$: Observable<number>;

  constructor(
    private _listsService: ListsService,
    private _router: Router,
    private _db: DexieService
  ) {
    this.dbUsers = this._db.table('users');
    console.log(this.dbUsers.schema);
    this.dbUsers.put({email: 'derp1', password: 'herp1'})
      .then((id) => {
        console.log(id);
      });
  }

  ngOnInit() {
    this.lists$ = this._listsService.lists$;
    this.currentListId$ = this._listsService.currentListId$;
  }

  onSubmit(list: HTMLInputElement): void {
    // const newListId = this._listsService.createList(list.value);
    list.value = '';
    list.blur();
    // this._router.navigate([`/lists/${newListId}`]);
  }

}
