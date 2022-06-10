import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllTodos } from '../../state/todo.selectors';
import { ToDoState } from '../../state/todo.state';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  public todos$ = this.store.select(getAllTodos);

  constructor(private store: Store<ToDoState>) {

   }

  ngOnInit(): void {
  }

}
