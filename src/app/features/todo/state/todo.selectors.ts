import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToDoState } from "./todo.state";


export const todoModuleStateProvider = createFeatureSelector<ToDoState>('todo');
export const allToDosProvider = (todoState: ToDoState) => todoState.todos;


export const getAllTodos = createSelector(todoModuleStateProvider, allToDosProvider);