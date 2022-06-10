import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserModule { }
