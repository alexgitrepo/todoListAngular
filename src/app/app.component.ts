import {Component, OnInit} from '@angular/core';
import {ApiService, ITodolist} from "./api.service";
import {AppStateService} from "./app-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  preloaderOn=false
  constructor(private api: ApiService, public state: AppStateService) {
  }

  ngOnInit(): void {
    this.preloaderOn=true
    this.api.getTodoLists().subscribe((response) => {
      this.state.setTodoLists(response)
      this.preloaderOn=false
    })

  }
}
