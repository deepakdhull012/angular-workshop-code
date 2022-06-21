import { createAction, props } from "@ngrx/store";
import { Todo } from "../features/todo/interfaces/todo.interfaces";

export const SetUserAction = createAction("SetUserAction",  props<{userName: string}>());
export const UpdateAllToDos = createAction("UpdateAllToDos",  props<{allToDos: Todo[]}>());