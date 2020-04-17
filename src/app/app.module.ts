import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistFooterComponent } from './todolist-footer/todolist-footer.component';
import { TodolistHeaderComponent } from './todolist-header/todolist-header.component';
import { TodolistTaskComponent } from './todolist-task/todolist-task.component';
import { TodolistTasksComponent } from './todolist-tasks/todolist-tasks.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodolistFooterComponent,
    TodolistHeaderComponent,
    TodolistTaskComponent,
    TodolistTasksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
