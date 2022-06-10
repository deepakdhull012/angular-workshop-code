import { createReducer, on } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interfaces';
import { AddTodoAction, LoadTodo, LoadTodoFailure, LoadTodoSuccess, RemoveTodo } from './todo.actions';
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
  on(RemoveTodo, (state, payload) => { return { todos: state.todos.filter(todo => todo.id !== payload.id) } })
);

// export const todoReducer = createReducer(
//     todos,
//   on(AddTodoAction, (state, payload) => {
//       return [...state]
//   })
// );