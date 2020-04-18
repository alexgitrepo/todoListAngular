import {Component, Input, OnInit} from '@angular/core';
import {ApiService, ITodolist} from '../api.service';
import {AppStateService} from '../app-state.service';

@Component({
  selector: 'app-todo-list-input',
  templateUrl: './todo-list-input.component.html',
  styleUrls: ['./todo-list-input.component.css']
})
export class TodoListInputComponent implements OnInit {
  inputValue = '';
  inputErrorStyle = false;

  constructor(private api: ApiService, private state: AppStateService) {
  }

  ngOnInit(): void {
  }

  inputErrorStyleOff() {
    this.inputErrorStyle = false;
  }

  addNewItem() {
    if (this.inputValue === '') {
      this.inputErrorStyle = true;
    } else {
      this.api.addTodoList(this.inputValue).subscribe((response) => {
        this.state.state.push(response.item);
      });
    }
  }

}
