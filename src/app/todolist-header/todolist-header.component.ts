import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-todolist-header',
  templateUrl: './todolist-header.component.html',
  styleUrls: ['./todolist-header.component.css'],
})
export class TodolistHeaderComponent implements OnInit {
  @Input() todoListId: string
  @Input() title: string

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.title)
    console.log(this.todoListId)
  }

}
