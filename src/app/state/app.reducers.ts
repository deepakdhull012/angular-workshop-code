import { createReducer, on } from '@ngrx/store';
import { todoReducer } from '../features/todo/state/todo.reducers';
import { SetUserAction, UpdateAllToDos } from './app.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
    user: "",
    todoState: {
        todos: []
    }

};




export const appReducer = createReducer(
    initialState,
  on(SetUserAction, (state, payload) => {
      return {
          user: payload.userName,
          todoState: {...state.todoState}
      }
  }),
  on(UpdateAllToDos, (state, payload) => {
    return {
        user: state.user,
        todoState: {
            todos: [...payload.allToDos]
        }
    }
})
);