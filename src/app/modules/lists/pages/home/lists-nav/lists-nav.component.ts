import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../../services/lists.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IntList } from '../../../interfaces/int-list';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists-nav',
  templateUrl: './lists-nav.component.html',
  styleUrls: ['./lists-nav.component.scss']
})
export class ListsNavComponent implements OnInit {

  lists$: Observable<IntList[]>;
  currentListId$: Observable<number>;

  constructor(
    private _listsService: ListsService,
    private _router: Router
  ) {}

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
