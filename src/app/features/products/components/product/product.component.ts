import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() product?: IProduct;

  constructor() {
    console.log("Product Detail ---> Constructor")
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log("Product Detail ---> ngOnChanges")
   }


  ngOnInit(): void {
    console.log("Product Detail ---> ngOnInit")
  }

  ngDoCheck(): void {
    console.log("Product Detail ---> ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("Product Detail ---> ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("Product Detail ---> ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("Product Detail ---> ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("Product Detail ---> ngAfterViewChecked")
  }

  ngOnDestroy(): void {
    console.log("Product Detail ---> ngOnDestroy")
  }

}
