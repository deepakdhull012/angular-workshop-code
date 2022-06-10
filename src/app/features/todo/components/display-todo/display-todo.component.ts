import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo.interfaces';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.scss']
})
export class DisplayTodoComponent implements OnInit {

  @Input() public todo: Todo = null as any as  Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
