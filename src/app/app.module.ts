import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './features/products/products.module';
import { UserModule } from './features/user/user.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/app.reducers';
import { TodoModule } from './features/todo/todo.module';

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
    StoreModule.forRoot(appReducer)

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
