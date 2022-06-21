import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../../interfaces/todo.interfaces';
import { TodoService } from '../../services/todo.service';
import { RemoveTodoAction } from '../../state/todo.actions';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.scss']
})
export class DisplayTodoComponent implements OnInit {

  @Input() public todo: Todo = null as any as  Todo;

  constructor(private store: Store) { }

  ngOnInit(): void {
    
  }

  removeTodo() {
    this.store.dispatch(RemoveTodoAction({
      id: this.todo.id
    }))
  }

}
