import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface ITodolist {
  _id: string
  title: string
  created_at?: string
  order?: number
  tasks?: Array<ITask>
}

export interface ITask {
  _id: string
  title: string
  description?: string | null
  completed?: boolean
  todoListId: string | null
  order: number | null
  status?: number | null
  priority?: number | null
  startDate?: string | null
  deadline?: string | null
  addedDate?: string | null
}
export interface IResponse {
  resultCode:string
  item:ITask
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getTodoLists() {
    return this.http.get<Array<ITodolist>>('https://radiant-plains-31062.herokuapp.com/todo-lists')
  }

  getTasks(todolistId: string) {
   return  this.http.get<Array<ITask>>(`https://radiant-plains-31062.herokuapp.com/todo-lists/${todolistId}/tasks`)
  }

  addTodoList(title: string) {
    return this.http.post<IResponse>('https://radiant-plains-31062.herokuapp.com/todo-lists', {title: title})
  }

  deleteTodoList(todolistId: string) {
    return this.http.delete(`https://radiant-plains-31062.herokuapp.com/todo-lists/${todolistId}`)
  }

  addTask(taskTitle: string, todolistId: string) {
    return this.http.post<any>(`https://radiant-plains-31062.herokuapp.com/todo-lists/${todolistId}/tasks`, {title: taskTitle})
  }

  updateTask(task: ITask, taskId: string, todoListId: string) {
    return this.http.put<any>(`https://radiant-plains-31062.herokuapp.com/todo-lists/${todoListId}/tasks/${taskId}`, {...task})
  }

  deleteTask(taskId, todoListId) {
    return this.http.delete(`https://radiant-plains-31062.herokuapp.com/todo-lists/${todoListId}/tasks/${taskId}`)
  }
}
