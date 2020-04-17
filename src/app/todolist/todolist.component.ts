import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiService, ITodolist} from "../api.service";
import {AppStateService} from "../app-state.service";
import {FooterService} from "../todolist-footer/footer.service";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers:[FooterService]

})
export class TodolistComponent implements OnInit {
  @Input() todoList: ITodolist

  constructor(private api: ApiService, private state: AppStateService) {
  }

  ngOnInit(): void {
    this.api.getTasks(this.todoList._id).subscribe((response) => {
      this.state.setTodoListTasks(this.todoList._id, response)
    })

  }

}
