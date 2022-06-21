import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdd-form-demo',
  templateUrl: './tdd-form-demo.component.html',
  styleUrls: ['./tdd-form-demo.component.scss']
})
export class TddFormDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
