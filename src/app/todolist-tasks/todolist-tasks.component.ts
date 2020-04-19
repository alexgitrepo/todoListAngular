import {AfterContentChecked, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ApiService, ITask} from '../api.service';
import {FooterService} from '../todolist-footer/footer.service';

@Component({
  selector: 'app-todolist-tasks',
  templateUrl: './todolist-tasks.component.html',
  styleUrls: ['./todolist-tasks.component.css'],
})
export class TodolistTasksComponent implements OnInit, AfterContentChecked, DoCheck, OnChanges {
  @Input() todoListId: string;
  @Input() todoListTasks: Array<ITask>;
  todoListTasksFilter: Array<ITask> = [];

  constructor(private footerService: FooterService) {
  }

  ngOnInit(): void {
    this.footerService.changeFilterValueEmitter.subscribe((value: string) => {
      this.todoListTasksFilter = this.todoListTasks.filter((t) => {
        if (this.footerService.currentFilterValue === 'all') {
          return true;
        } else if (this.footerService.currentFilterValue === 'completed') {
          if (t.status === 2) {
            return true;
          }
        } else if (this.footerService.currentFilterValue === 'active') {
          if (t.status === 0) {
            return true;
          }
        }
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.todoListTasksFilter = this.todoListTasks.filter((t) => {
      if (this.footerService.currentFilterValue === 'all') {
        return true;
      } else if (this.footerService.currentFilterValue === 'completed') {
        if (t.status === 2) {
          return true;
        }
      } else if (this.footerService.currentFilterValue === 'active') {
        if (t.status === 0) {
          return true;
        }
      }
    });
  }

  ngDoCheck(): void {
  }

  ngAfterContentChecked(): void {
  }
}
