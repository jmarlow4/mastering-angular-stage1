import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../../services/lists.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IntList } from '../../../interfaces/int-list';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { DexieService } from '../../../../../services/dexie.service';
import Dexie from 'dexie';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-lists-nav',
  templateUrl: './lists-nav.component.html',
  styleUrls: ['./lists-nav.component.scss']
})
export class ListsNavComponent implements OnInit {

  dbUsers: Dexie.Table<any, string>;
  lists$: Observable<IntList[]>;
  currentListId$: Observable<string>;

  constructor(
    private _listsService: ListsService,
    private _router: Router,
    public snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.lists$ = this._listsService.lists$;
    this.currentListId$ = this._listsService.currentListId$;
  }

  onSubmit(list: HTMLInputElement): void {
    if (!!list.value && list.value !== '') {
      this._listsService.createList(list.value)
        .subscribe((newListId: string) => {
          this._router.navigate([`/lists/${newListId}`]);
        });
      list.value = '';
      list.blur();
    } else {
      this.snackbar.open(
        'List title must have a value',
        'dismiss',
        {duration: 4000, extraClasses: ['snackbar-error']});
    }
  }

}
