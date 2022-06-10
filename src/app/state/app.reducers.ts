import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';

export const initialState: AppState = {
    todoState: {
        todos: []
    }
};

export const appReducer = createReducer(
    initialState
);