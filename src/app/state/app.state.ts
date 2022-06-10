import { Todo } from "../features/todo/interfaces/todo.interfaces";
import { ToDoState } from "../features/todo/state/todo.state";

export interface AppState {
    todoState: ToDoState
}