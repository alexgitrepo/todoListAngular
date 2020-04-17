import {Injectable} from '@angular/core';
import {ITask, ITodolist} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  state: Array<ITodolist>|any;

  constructor() {
  }

  setTodoLists(todolists: Array<ITodolist>) {
    this.state = todolists;
  }
  setTodoListTasks(todolistId: string, tasks: Array<ITask>) {
    this.state.map((item) => {
      if (item._id === todolistId) {
        return item.tasks = tasks;
      }
    });
    console.log(this.state);
  }
}
