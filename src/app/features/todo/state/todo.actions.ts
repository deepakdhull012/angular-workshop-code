import { createAction, props } from "@ngrx/store";
import { Todo } from "../interfaces/todo.interfaces";


export const AddTodoAction = createAction("AddTodoAction",  props<{todo: Todo}>());
export const LoadTodo = createAction("LoadTodo");
export const LoadTodoSuccess = createAction("LoadTodoSuccess", props<{todos: Todo[]}>());
export const LoadTodoFailure = createAction("LoadTodoFailure", props<{error: string}>());
export const RemoveTodo = createAction("RemoveTodo", props<{id: number}>());