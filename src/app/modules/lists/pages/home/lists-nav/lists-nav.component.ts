import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../../services/lists.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IntList } from '../../../interfaces/int-list';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-lists-nav',
  templateUrl: './lists-nav.component.html',
  styleUrls: ['./lists-nav.component.scss']
})
export class ListsNavComponent implements OnInit {

  lists$: Observable<IntList[]>;

  constructor(private _listsService: ListsService) { }

  ngOnInit() {
    this.lists$ = this._listsService.lists$;
  }

}
