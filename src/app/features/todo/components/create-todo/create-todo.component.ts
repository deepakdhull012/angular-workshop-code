import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTodoAction } from '../../state/todo.actions';
import { ToDoState } from '../../state/todo.state';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  constructor(private store: Store<ToDoState>) { }

  ngOnInit(): void {
  }

  addToDo(content: string) {
    this.store.dispatch(AddTodoAction({
      todo: {
        id: 1,
        task: content
      }
    }))
  }

}
