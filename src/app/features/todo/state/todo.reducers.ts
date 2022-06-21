import { createReducer, on } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interfaces';
import { AddTodoAction, LoadTodo, LoadTodoFailure, LoadTodoSuccess, RemoveTodoAction } from './todo.actions';
import { ToDoState } from './todo.state';

export const todoState: ToDoState = {
    todos: []
};

export const todos: Todo[] = [];

export const todoReducer = createReducer(
    todoState,
  on(AddTodoAction, (state, payload) => {
      return {
          todos: [...state.todos, payload.todo]
      }
  }),
  on(LoadTodo, (state) => state),
  on(RemoveTodoAction, (state, payload) => { return { todos: state.todos.filter(todo => todo.id !== payload.id) } }),
  on(LoadTodoSuccess, (state, payload) => { console.log('success reducer', payload);return { todos: [...payload.todos] } })
);

// export const todoReducer = createReducer(
//     todos,
//   on(AddTodoAction, (state, payload) => {
//       return [...state]
//   })
// );