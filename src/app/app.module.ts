import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistFooterComponent } from './todolist-footer/todolist-footer.component';
import { TodolistHeaderComponent } from './todolist-header/todolist-header.component';
import { TodolistTaskComponent } from './todolist-task/todolist-task.component';
import { TodolistTasksComponent } from './todolist-tasks/todolist-tasks.component';
import {HttpClientModule} from "@angular/common/http";
import { ItemInputComponent } from './item-input/item-input.component';
import {FormsModule} from '@angular/forms';
import { TodoListInputComponent } from './todo-list-input/todo-list-input.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodolistFooterComponent,
    TodolistHeaderComponent,
    TodolistTaskComponent,
    TodolistTasksComponent,
    ItemInputComponent,
    TodoListInputComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
