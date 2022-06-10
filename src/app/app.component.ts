import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from './core/services/logger.service';
import { IProduct } from './features/products/interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {




  constructor(private logger: LoggerService, private router: Router) {
    this.logger.log('hello')
  }
  title = 'try1';

  goto(route: string) {
    this.router.navigateByUrl(route);
  }
  
}
