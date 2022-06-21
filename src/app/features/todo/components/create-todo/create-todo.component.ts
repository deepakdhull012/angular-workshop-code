import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UpdateAllToDos } from 'src/app/state/app.actions';
import { AddTodoAction } from '../../state/todo.actions';
import { getAllTodos } from '../../state/todo.selectors';
import { ToDoState } from '../../state/todo.state';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  public todos$ = this.store.select(getAllTodos);

  constructor(private store: Store<ToDoState>) { }

  public noOfToDos = 0;
  ngOnInit(): void {
    this.todos$.subscribe(allToDos => {
      this.noOfToDos = allToDos.length;
      this.store.dispatch(UpdateAllToDos({
        allToDos
      }))
    });
  }

  addToDo(content: string) {
    this.store.dispatch(AddTodoAction({
      todo: {
        id: this.noOfToDos+1,
        title: content
      }
    }))

    

    
  }

}
