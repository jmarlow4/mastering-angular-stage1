import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import 'dexie-observable';
import { IDatabaseChange } from 'dexie-observable/api';

@Injectable()
export class DexieService extends Dexie {
  constructor() {
    super('ToDoItDexie');
    this.version(2).stores({
      users: '$$uuid, email, password',
      lists: '$$uuid, title, archived, userId',
      tasks: '$$uuid, title, description, dateCreated, dateCompleted, listId'
    });
    this.open();
    this.on('changes', (changes: IDatabaseChange[]) => {
      changes.forEach((change: IDatabaseChange) => {
        switch (change.type) {
          case 1: // CREATED
            console.log(
              'An object was created: ' +
              JSON.stringify(change['obj']));
            break;
          case 2: // UPDATED
            console.log(
              'An object with key ' + change.key +
              ' was updated with modifications: ' +
              JSON.stringify(change['mods']));
            break;
          case 3: // DELETED
            console.log('An object was deleted: ' +
              JSON.stringify(change['oldObj']));
            break;
        }
      });
    });
  }
}
