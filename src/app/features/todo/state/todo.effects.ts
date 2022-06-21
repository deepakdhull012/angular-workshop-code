import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { TodoService } from './../services/todo.service';
import * as todoActions from "./todo.actions";
 
@Injectable()
export class ToDoEffects {
 
  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(todoActions.LoadTodo.type),
    tap(a => {
        console.error("effect executed", a)
    }),
    mergeMap(() => this.todoService.getAllTodos()
      .pipe(
        
        map(todos => ({ type: todoActions.LoadTodoSuccess.type, todos })),
        catchError(() => of({ type: todoActions.LoadTodoFailure.type, payload: {
            todos: []
        } }))
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}