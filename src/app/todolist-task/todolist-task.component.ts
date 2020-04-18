import {Component, Input, OnInit} from '@angular/core';
import {ApiService, ITask} from '../api.service';
import {AppStateService} from '../app-state.service';

@Component({
  selector: 'app-todolist-task',
  templateUrl: './todolist-task.component.html',
  styleUrls: ['./todolist-task.component.css']
})
export class TodolistTaskComponent implements OnInit {
  @Input() task: ITask;
  @Input() index: number;

  constructor(private api: ApiService, private state: AppStateService) {
  }

  ngOnInit(): void {
  }

  changeInputValue(event: any) {
    let newCheckedValue = event.currentTarget.checked;
    let status = (newCheckedValue === true) ? 2 : 0;
    this.api.updateTask({...this.task, status: status}, this.task._id, this.task.todoListId).subscribe((response) => {
      this.state.state = this.state.state.map((todolist) => {
        if (todolist._id === response.item.todolistId) {
          return {
            ...todolist, tasks: todolist.tasks.map((task) => {
              if (task._id === response.item._id) {
                return response.item;
              } else {
                return task;
              }
            })
          };
        } else {
          return todolist;
        }
      });
    });
  }

  deleteTask() {
    this.api.deleteTask(this.task._id, this.task.todoListId).subscribe((response) => {
      console.log(this.task);
      this.state.state = this.state.state.map((todolist) => {
        if (todolist.todoListId === this.task.todoListId) {
          return {
            ...todolist, tasks: todolist.tasks.filter((task) => {
              return task._id !== this.task._id;
            })
          };
        } else {
          return todolist;
        }
      });
      console.log(this.state);
    });
  }
}
