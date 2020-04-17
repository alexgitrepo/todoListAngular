import {Component, OnInit} from '@angular/core';
import {ApiService, ITodolist} from "./api.service";
import {AppStateService} from "./app-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private api: ApiService, public state: AppStateService) {
  }

  ngOnInit(): void {
    this.api.getTodoLists().subscribe((response) => {
      this.state.setTodoLists(response)
    })

  }
}
