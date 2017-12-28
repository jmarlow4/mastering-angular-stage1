import { DexieService } from './services/dexie.service';
import { listsData } from './modules/lists/mocks/lists-data';
import { tasksData } from './modules/lists/mocks/tasks-data';

export function initDefaultUser(_dexieService: DexieService) {
  console.log('listsData', listsData);
  for (const list of listsData) {
    console.log('--list--', list);
  }
  return () => {
    const dbUsers = _dexieService.table('users');
    const dbLists = _dexieService.table('lists');
    const dbTasks = _dexieService.table('tasks');
    dbUsers.get({'email': 'jdoe@domain.com'})
      .then(user => {
        if (!user) {
          dbUsers.put({
            email: 'jdoe@domain.com',
            password: 'pw1234',
            uuid: '7a01a19b-ea0a-4d4b-90c9-fa3d186d1462'
          });
          // for (const task of tasksData) {
          //   console.log('task', task);
          // }
        }
      });
  };
}
