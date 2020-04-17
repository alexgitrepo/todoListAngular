import {Component, Input, OnInit} from '@angular/core';
import {ApiService, ITask} from "../api.service";
import {AppStateService} from "../app-state.service";

@Component({
  selector: 'app-todolist-task',
  templateUrl: './todolist-task.component.html',
  styleUrls: ['./todolist-task.component.css']
})
export class TodolistTaskComponent implements OnInit {
  @Input() task: ITask

  constructor(private api: ApiService, private state: AppStateService) {
  }

  ngOnInit(): void {
  }

  changeInputValue(event: any) {
    let newCheckedValue = event.currentTarget.checked
    let status = (newCheckedValue === true) ? 2 : 0
    this.api.updateTask({...this.task, status: status}, this.task._id, this.task.todoListId).subscribe((response) => {
      this.state.state = this.state.state.map((todolist) => {
        if (todolist._id === response.item.todolistId) {
          return {
            ...todolist, tasks: todolist.tasks.map((task) => {
              if (task._id === response.item._id) {
                return response.item
              } else return task
            })
          }
        } else {
          return todolist
        }
      })
      console.log(this.state)
    })
  }
}
