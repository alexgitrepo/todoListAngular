import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AppStateService} from '../app-state.service';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-todolist-header',
  templateUrl: './todolist-header.component.html',
  styleUrls: ['./todolist-header.component.css'],
})
export class TodolistHeaderComponent implements OnInit {
  @Input() todoListId: string;
  @Input() title: string;

  constructor(private state: AppStateService, private api: ApiService) {
  }

  ngOnInit(): void {
    console.log(this.title);
    console.log(this.todoListId);
  }

  deleteTodoList() {
    this.api.deleteTodoList(this.todoListId).subscribe((response) => {
      this.state.state = this.state.state.filter((todolist) => {
          return todolist._id !== this.todoListId;
        }
      );
    });
  }
}
