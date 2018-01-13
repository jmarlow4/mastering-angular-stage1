import { Component, Input } from '@angular/core';
import { IntList } from '../../../../interfaces/int-list';
import { Observable } from 'rxjs/Observable';
import { ListsService } from '../../../../services/lists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-link',
  templateUrl: './list-link.component.html',
  styleUrls: ['./list-link.component.scss']
})
export class ListLinkComponent {

  @Input() list: IntList;
  @Input() currentList: Observable<string>;
  hovered = false;

  constructor(
    private _listsService: ListsService,
    private _router: Router
  ) {}

  setCurrentListId(listId: string) {
    this._listsService.setCurrentListId(listId);
  }

  deleteListHandler(listId: string) {
    this._listsService.deleteList(listId).subscribe(
      () => console.log('delete sub next'),
      () => console.log('delete sub error'),
      () => console.log('delete sub end'),
    );
    this._router.navigate(['/lists']);
  }

}
