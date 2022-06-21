import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoggerService } from './core/services/logger.service';
import { IProduct } from './features/products/interfaces/product.interface';
import { SetUserAction } from './state/app.actions';
import { appStateSelector,  } from './state/app.selectors';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appState$ = this.store.select(appStateSelector);


  constructor(private router: Router, private store: Store<AppState>) {
    
    this.store.dispatch(SetUserAction({
      userName: "Deepak"
    }));

      this.appState$.subscribe(state => {
        console.log("App State is",state);
      })

    
    
  }
  title = 'try1';

  goto(route: string) {
    this.router.navigateByUrl(route);
  }
  
}
