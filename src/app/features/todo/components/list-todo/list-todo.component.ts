import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoService } from '../../services/todo.service';
import { LoadTodo } from '../../state/todo.actions';
import { getAllTodos } from '../../state/todo.selectors';
import { ToDoState } from '../../state/todo.state';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  public todos$ = this.store.select(getAllTodos);

  constructor(private store: Store<ToDoState>, private todoService: TodoService) {

   }

  ngOnInit(): void {
    
  }

  public fetchTodos() {
    this.store.dispatch(LoadTodo());
  }

}
