import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerComponent } from './components/logger/logger.component';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { MyTableComponent } from './components/my-table/my-table.component';
import { MyMaterialModule } from './my-material.module';




@NgModule({
  declarations: [
    LoggerComponent,
    ErrorHandlerComponent,
    MyTableComponent
  ],
  imports: [
    MyMaterialModule
  ],
  exports: [
    MyMaterialModule,
    LoggerComponent,
    ErrorHandlerComponent,
    MyTableComponent
  ],
    
})
export class SharedModule { }
