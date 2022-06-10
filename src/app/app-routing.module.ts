import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';
import { ProductComponent } from './features/products/components/product/product.component';
import { ListTodoComponent } from './features/todo/components/list-todo/list-todo.component';
import { UserDetailComponent } from './features/user/user-detail/user-detail.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: "products",
    component: ProductListComponent
  },
  {
    path: "users",
    component: UserDetailComponent
  },
  {
    path: "todos",
    component: ListTodoComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
