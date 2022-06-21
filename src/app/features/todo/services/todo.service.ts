import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interfaces';
import { getAllTodos } from '../state/todo.selectors';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

    getAllTodos(): Observable<Array<Todo>> {
      return this.http.get<Array<Todo>>("https://jsonplaceholder.typicode.com/todos").pipe(map((res) => {console.log('res', res);return res}));
    }
  
}
