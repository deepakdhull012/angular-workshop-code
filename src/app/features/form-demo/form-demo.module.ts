import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormDemoComponent } from './components/reactive-form-demo/reactive-form-demo.component';
import { TddFormDemoComponent } from './components/tdd-form-demo/tdd-form-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDemoContainerComponent } from './components/form-demo-container/form-demo-container.component';



@NgModule({
  declarations: [
    ReactiveFormDemoComponent,
    TddFormDemoComponent,
    FormDemoContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormDemoModule { }
