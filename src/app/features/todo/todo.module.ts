import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { DisplayTodoComponent } from './components/display-todo/display-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from "./state/todo.reducers";


@NgModule({
  declarations: [
    CreateTodoComponent,
    DisplayTodoComponent,
    ListTodoComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature("todo", todoReducer)
  ],
  exports: [CreateTodoComponent,
    DisplayTodoComponent,
    ListTodoComponent]
})
export class TodoModule { }
