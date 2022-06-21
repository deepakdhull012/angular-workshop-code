import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './features/products/products.module';
import { UserModule } from './features/user/user.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/app.reducers';
import { TodoModule } from './features/todo/todo.module';
import { EffectsModule } from '@ngrx/effects';
import { FormDemoModule } from './features/form-demo/form-demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    CoreModule,
    UserModule,
    TodoModule,
    FormDemoModule,
    StoreModule.forRoot({
      "root": appReducer
    }),
    EffectsModule.forRoot()

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
