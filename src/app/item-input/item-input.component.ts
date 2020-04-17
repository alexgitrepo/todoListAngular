import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {AppStateService} from '../app-state.service';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.css']
})
export class ItemInputComponent implements OnInit {
  @Input() todoListId: string;
  inputValue = '';
  inputErrorStyle = false;

  constructor(private api: ApiService, private state: AppStateService) {
  }

  ngOnInit(): void {
  }

  inputErrorStyleOff() {
    this.inputErrorStyle=false
  }

  addNewItem() {
    if (this.inputValue === '') {
      this.inputErrorStyle = true;
    } else {
      this.api.addTask(this.inputValue, this.todoListId).subscribe((response) => {
          this.state.state = this.state.state.map((todolist) => {
            if (todolist._id === response.item.todolistId) {
              return {
                ...todolist, tasks: [...todolist.tasks, response.item]
              };
            } else {
              return todolist;
            }
          });
        }
      );
    }
  }
}
