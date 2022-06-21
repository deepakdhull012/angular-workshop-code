import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-demo-container',
  templateUrl: './form-demo-container.component.html',
  styleUrls: ['./form-demo-container.component.scss']
})
export class FormDemoContainerComponent implements OnInit {

  isTDDActive = true;

  constructor() { }

  ngOnInit(): void {
  }

  activate(type: string) {
    this.isTDDActive = type === 'tdd';
  }

}
